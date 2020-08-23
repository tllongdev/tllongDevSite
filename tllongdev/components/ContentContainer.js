import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
	contentContainer: {
		display: 'block',
		backgroundColor: theme.palette.type === 'light' ? '#ededed' : '#121212',
		borderTop: `1px solid ${theme.palette.divider}`,
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	contentWrapper: {
		maxWidth: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: 1048,
		padding: theme.spacing(0, 3),
	},
}));

export default ({ children }) => {
	const classes = useStyles();

	return (
		<>
			<Box className={classes.contentContainer}>
				<div className={classes.contentWrapper}>{children}</div>
			</Box>
		</>
	);
};
