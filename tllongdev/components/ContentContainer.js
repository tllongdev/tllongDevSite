import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
	contentContainer: {
		display: 'block',
		backgroundColor: theme.palette.type === 'light' ? '#ededed' : '#121212',
		background: 'linear-gradient(#00000000, #00000010)',
		borderTop:
			theme.palette.type === 'light' ? `1px solid ${theme.palette.text.primary}` : `1px solid ${theme.palette.divider}`,
		borderBottom:
			theme.palette.type === 'light' ? `1px solid ${theme.palette.text.primary}` : `1px solid ${theme.palette.divider}`,
	},
	contentWrapper: {
		maxWidth: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: 1048,
		padding: theme.spacing(0, 3),
	},
}));

const ContentContainer = ({ children }) => {
	const classes = useStyles();

	return (
		<>
			<Box className={classes.contentContainer}>
				<div className={classes.contentWrapper}>{children}</div>
			</Box>
		</>
	);
};

export default ContentContainer;