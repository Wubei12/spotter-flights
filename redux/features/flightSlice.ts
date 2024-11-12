import { FilteredAirportDTO, NearbyAirportDTO } from '@/repository/types';
import { API } from '@/services/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface FlightState {
	nearbyAirports: NearbyAirportDTO;
	filteredAirport: FilteredAirportDTO;
	airportsLoading: boolean;
	filteredAirportLoading: boolean;
	error: string | null;
}

const initialState: FlightState = {
	nearbyAirports: {},
	filteredAirport: {},
	airportsLoading: false,
	filteredAirportLoading: false,
	error: null,
};

interface QueryParams {
	filter?: string;
	limit?: number;
	search?: string;
	category?: string;
	lat?: number;
	lng?: number;
}

export const getNearbyAirports = createAsyncThunk(
	'airports/getNearbyAirports',
	async (queryParams: QueryParams, { rejectWithValue }) => {
		console.log('🚀 ~ queryParams:', queryParams);
		try {
			const response = await API.flights.getNearbyAirports({
				lat: 8.998373938497878,
				lng: 38.82409342949058,
			});
			return response;
		} catch (error) {
			return rejectWithValue('Failed to fetch brands');
		}
	}
);

export const searchAirports = createAsyncThunk(
	'airports/searchAirports',
	async (
		{ queryParams, query }: { queryParams: QueryParams; query: string },
		{ rejectWithValue }
	) => {
		console.log('🚀 ~ queryParams:', queryParams);
		try {
			const response = await API.flights.searchAirports(query);
			return response;
		} catch (error) {
			return rejectWithValue('Failed to fetch brands');
		}
	}
);

const flightSlice = createSlice({
	name: 'flights',
	initialState,
	reducers: {},
	extraReducers: (builders) => {
		builders
			.addCase(getNearbyAirports.pending, (state) => {
				state.airportsLoading = true;
				state.error = null;
				state.nearbyAirports = {};
			})
			.addCase(getNearbyAirports.fulfilled, (state, action) => {
				state.airportsLoading = false;
				state.nearbyAirports = action.payload as unknown as NearbyAirportDTO;
			})
			.addCase(getNearbyAirports.rejected, (state, action) => {
				state.airportsLoading = false;
				state.error = action.payload as string;
			})
			.addCase(searchAirports.pending, (state) => {
				state.filteredAirportLoading = true;
				state.error = null;
				state.filteredAirport = {};
			})
			.addCase(searchAirports.fulfilled, (state, action) => {
				state.filteredAirportLoading = false;
				state.filteredAirport = action.payload as unknown as FilteredAirportDTO;
			})
			.addCase(searchAirports.rejected, (state, action) => {
				state.filteredAirportLoading = false;
				state.error = action.payload as string;
			});
	},
});

export default flightSlice.reducer;
