import { $Fetch, FetchOptions } from 'ofetch';
import { ErrorResponse, ErrorTypes } from './types';

class FetchFactory<BaseListResponse> {
	private $fetch: $Fetch;

	constructor(fetcher: $Fetch) {
		this.$fetch = fetcher;
	}

	async call(
		method: string,
		url: string,
		data?: object,
		fetchOptions?: FetchOptions<'json'>
	): Promise<BaseListResponse> {
		return this.$fetch<BaseListResponse>(url, {
			method,
			body: data,
			...fetchOptions,
		});
	}
}

abstract class BaseModule<
	BaseListResponse,
	BaseDto
> extends FetchFactory<BaseListResponse> {
	protected abstract RESOURCE: string;

	private handleError(error: unknown) {
		console.error('An error occurred:', error);
		throw error;
	}

	private async createUrl(
		queryParams: Record<string, any>, // Allow any type to handle arrays and strings
		extension: string = ''
	): Promise<string> {
		console.log('🚀 ~ createUrl: queryParams:', queryParams);
		const searchParams = new URLSearchParams();

		// Loop through each key in the queryParams object
		Object.entries(queryParams).forEach(([key, value]) => {
			if (Array.isArray(value)) {
				// If the value is an array, append each item with the same key
				value.forEach((item) => searchParams.append(key, item));
			} else {
				// Otherwise, append the single value
				searchParams.append(key, value);
			}
		});

		// Construct the full URL with the extension and query string
		const paramsString = searchParams.toString();
		return `${this.RESOURCE}${extension}?${paramsString}`;
	}

	private sendHeaders(
		additionalHeaders?: Record<string, string>
	): FetchOptions<'json'> {
		return {
			headers: {
				...(additionalHeaders || {}),
			},
		};
	}

	protected async fetchData<ResponseType>(
		queryParams: object,
		extension = '',
		additionalHeaders?: Record<string, string>
	): Promise<ResponseType | undefined> {
		console.log('🚀 ~ fetchData: queryParams:', queryParams);
		try {
			const fetchOptions = await this.sendHeaders(
				(additionalHeaders = {
					'x-rapidapi-key':
						'8d6a207580msh69197004e7c2578p165b7djsn9f3f0c70e4bb',
					'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com',
				})
			);
			const url = await this.createUrl(queryParams, extension);

			const response = await this.call('GET', url, undefined, fetchOptions);

			return response as Awaited<ResponseType | undefined>;
		} catch (error) {
			this.handleError(error);
			return undefined;
		}
	}

	protected async createEntity<BaseDto extends object>(
		payload: BaseDto,
		extension = '',
		additionalHeaders?: Record<string, string>
	): Promise<BaseDto> {
		try {
			const url = `${this.RESOURCE}${extension}`;
			const response = await this.call('POST', url, payload);
			return response as object as BaseDto;
		} catch (error) {
			this.handleError(error);
			throw error;
		}
	}

	protected async updateEntity<BaseDto extends object>(
		id: string,
		payload: BaseDto,
		extension = '',
		additionalHeaders?: Record<string, string>
	): Promise<BaseDto> {
		try {
			const url = `${this.RESOURCE}${extension}`;
			return (await this.call('PATCH', url, payload)) as unknown as BaseDto;
		} catch (error) {
			console.error('Error updating entity:', error);
			throw error;
		}
	}

	protected async deleteEntity(
		id: string,
		extension = '',
		additionalHeaders?: Record<string, string>
	): Promise<void> {
		try {
			const url = `${this.RESOURCE}${extension}`;
			await this.call('DELETE', url, undefined);
		} catch (error) {
			console.error('Error deleting entity:', error);
			throw error;
		}
	}
	private throwError(error: ErrorResponse) {
		if (!error || error.type === ErrorTypes.SERVER_ERROR) {
			throw new Error('System Error. Please contact an administrator.');
		} else {
			const message = error.errors?.map((err) => err.detail).join('\n');
			throw new Error(message);
		}
	}
}

export default BaseModule;
