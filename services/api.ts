import { FlightsModule } from '@/repository/modules/flights';
import { $fetch, FetchOptions } from 'ofetch';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const fetchOptions: FetchOptions = {
	baseURL: baseURL,
};

const apiFetcher = $fetch.create(fetchOptions);

const flightFetcher = new FlightsModule(apiFetcher);

export const API = {
	flights: flightFetcher,
};
