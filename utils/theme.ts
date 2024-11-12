import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		primary: {
			light: '#eff0f1',
			main: '#e8eaed',
			dark: '#101820',
			contrastText: '#eff0f1',
		},
		secondary: {
			light: '#36373a',
			main: '#989898',
			dark: '#f3f3f3',
			contrastText: '#989898',
		},
		text: {
			primary: '#E8EAED',
			secondary: '#fff',
		},
		background: {
			default: '#202124',
			paper: '#36373a',
		},
		action: {
			active: '#E8EAED',
		},
	},
});
