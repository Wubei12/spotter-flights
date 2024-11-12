import BaseModule from '../factory';
import { FilteredAirportDTO, NearbyAirportDTO } from '../types';

export class FlightsModule extends BaseModule<
	NearbyAirportDTO,
	NearbyAirportDTO[]
> {
	protected RESOURCE = 'api/v1/flights';

	async searchAirports(
		airport: string
	): Promise<FilteredAirportDTO | undefined> {
		return this.fetchData<FilteredAirportDTO | undefined>(
			{ query: airport },
			'/searchAirport'
		);
	}

	async getNearbyAirports(
		queryParams: object
	): Promise<NearbyAirportDTO | undefined> {
		console.log('🚀 ~ getNearbyAirports: queryParams:', queryParams);
		return this.fetchData<NearbyAirportDTO | undefined>(
			queryParams,
			'/getNearByAirports'
		);
	}
}
