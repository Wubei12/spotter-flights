'use client';

import { AppStore, makeStore } from '@/redux/store';
import { theme } from '@/utils/theme';
import { ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { useRef } from 'react';
import { Provider } from 'react-redux';

export default function StoreProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const storeRef = useRef<AppStore>();
	if (!storeRef.current) {
		// Create the store instance the first time this renders
		storeRef.current = makeStore();
	}

	return (
		<Provider store={storeRef.current}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</LocalizationProvider>
		</Provider>
	);
}
