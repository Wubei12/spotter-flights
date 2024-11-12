export enum ErrorTypes {
	VALIDATION_ERROR = 'validation_error',
	CLIENT_ERROR = 'client_error',
	SERVER_ERROR = 'server_error',
}

export interface ErrorResponse {
	type?: ErrorTypes;
	errors?: ErrorResponseItem[];
}

export interface ErrorResponseItem {
	code?: string;
	detail?: string;
	attr?: string;
}
export interface NearbyAirportDTO {
	status?: boolean;
	timestamp?: number;
	data?: Data;
}

export interface FilteredAirportDTO {
	status?: boolean;
	timestamp?: number;
	data?: Current[];
}

export interface Data {
	current?: Current;
	nearby?: Nearby[];
	recent?: any[];
}

export interface Current {
	skyId?: string;
	entityId?: string;
	presentation?: Presentation;
	navigation?: Navigation;
}

export interface Navigation {
	entityId?: string;
	entityType?: string;
	localizedName?: string;
	relevantFlightParams?: RelevantFlightParams;
	relevantHotelParams?: RelevantHotelParams;
}

export interface RelevantFlightParams {
	skyId?: string;
	entityId?: string;
	flightPlaceType?: string;
	localizedName?: string;
}

export interface RelevantHotelParams {
	entityId?: string;
	entityType?: string;
	localizedName?: string;
}

export interface Presentation {
	title?: string;
	suggestionTitle?: string;
	subtitle?: string;
}

export interface Nearby {
	presentation?: Presentation;
	navigation?: Navigation;
}
