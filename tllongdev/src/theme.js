import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 420,
			md: 900,
			lg: 1280,
			xl: 1920,
		},
	},
	palette: {
		type: 'light',
		primary: {
			main: '#5DBAA8',
		},
		secondary: {
			main: '#DF9687',
		},
		warning: {
			main: '#fdfc74',
		},
		contrast: {
			light: '#ededed',
			main: '#ededed',
			dark: '#121212',
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
		// MuiPaper: {
		// 	root: {
		// 		backgroundColor: '#00000020',
		// 	},
		// },
		MuiList: {
			padding: {
				paddingTop: 0,
				paddingBottom: 0,
			},
		},
	},
});

export default theme;
