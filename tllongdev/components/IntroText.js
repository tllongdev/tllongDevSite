import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Container from '@material-ui/core/Container';
import { useSpring, animated, config } from 'react-spring';

const useStyles = makeStyles(theme => ({
	container: {
		width: '90%',
		height: '60%',
		minWidth: 333,
		borderRadius: 12,
		backgroundColor: '#23232300',
		// color: 'primary',
		fontFamily: 'Open Sans',
		fontWeight: '800',
		fontSize: '14vw',
		whiteSpace: 'pre-wrap',
		// textAlign: 'center',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexWrap: 'wrap',
	},
}));

export default () => {
	const classes = useStyles();
	const fullProps = useSpring({
		from: { opacity: 0, transform: 'translate3d(-50px, 0, 0)' },
		to: { opacity: 0.3, transform: 'translate3d(0, 0, 0)' },
	});
	const stackProps = useSpring({
		from: { opacity: 0, transform: 'translate3d(50px, 0, 0)' },
		to: { opacity: 0.3, transform: 'translate3d(0, 0, 0)' },
		delay: 150,
	});
	const softwareProps = useSpring({
		from: { opacity: 0, transform: 'translate3d(0, 50px, 0)' },
		to: { opacity: 0.3, transform: 'translate3d(0, 0, 0)' },
		delay: 300,
	});
	const developmentProps = useSpring({
		from: { opacity: 0, transform: 'translate3d(0, 50px, 0)' },
		to: { opacity: 0.3, transform: 'translate3d(0, 0, 0)' },
		delay: 500,
	});
	return (
		<React.Fragment>
			<Container className={classes.container}>
				<animated.div style={fullProps}>FULL </animated.div>
				<animated.div style={stackProps}>STACK</animated.div>
				<animated.div style={softwareProps}>SOFTWARE</animated.div>
				<animated.div style={developmentProps}>DEVELOPMENT</animated.div>
			</Container>
		</React.Fragment>
	);
};
