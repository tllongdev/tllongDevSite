import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
	container: {
		// position: 'relative',
		minWidth: '100%',
		minHeight: '100vh',
		// overflow: 'hidden',
		// marginBottom: 500,
		padding: 0,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	image: {
		display: 'block',
		// minWidth: '100%',
		// minHeight: '100vh',
		maxHeight: '100vh',
		width: 'auto',
		height: '100%',
	},
}));

export default ({ image }) => {
	const classes = useStyles();
	return (
		<>
			<Fade in={true} timeout={500}>
			<div className={classes.container}>
				<img src={image} alt='' className={classes.image} />
			</div>
			</Fade>
		</>
	);
};
