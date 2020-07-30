import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#5DBAA8',
		},
		secondary: {
			main: '#DF9687',
		},
		warning: {
			main: '#fdfc74',
		},
	},
	typography: {
		fontFamily: [
			'Inter',
			'Nunito',
			'-apple-system',
			'system-ui',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
		].join(','),
	},
	props: {
		MuiButton: {
			size: 'small',
		},
		MuiFilledInput: {
			margin: 'dense',
		},
		MuiFormControl: {
			margin: 'dense',
		},
		MuiFormHelperText: {
			margin: 'dense',
		},
		MuiIconButton: {
			size: 'small',
		},
		MuiInputBase: {
			margin: 'dense',
		},
		MuiInputLabel: {
			margin: 'dense',
		},
		MuiListItem: {
			dense: true,
		},
		MuiOutlinedInput: {
			margin: 'dense',
		},
		MuiFab: {
			size: 'small',
		},
		MuiTable: {
			size: 'small',
		},
		MuiTextField: {
			margin: 'dense',
		},
		MuiToolbar: {
			variant: 'dense',
		},
	},
	overrides: {
		MuiIconButton: {
			sizeSmall: {
				// Adjust spacing to reach minimal touch target hitbox
				marginLeft: 4,
				marginRight: 4,
				padding: 12,
			},
		},
	},
});

export default theme;
