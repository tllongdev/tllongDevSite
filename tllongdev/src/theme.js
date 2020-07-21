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
});

export default theme;
