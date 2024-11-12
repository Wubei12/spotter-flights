import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { flightSlice } from './features';

export const makeStore = () => {
	return configureStore({
		reducer: {
			flight: flightSlice,
		},
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
	ThunkReturnType,
	RootState,
	unknown,
	Action
>;
