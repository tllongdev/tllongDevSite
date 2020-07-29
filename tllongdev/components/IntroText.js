import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Container from '@material-ui/core/Container';
import { useSpring, animated, config } from 'react-spring';

const useStyles = makeStyles(theme => ({
	container: {
		width: '100%',
		height: '100%',
		// minWidth: 333,
		// borderRadius: 12,
		backgroundColor: '#23232370',
		fontFamily: 'sequel_sanssemi_bold_body, roboto',
		fontWeight: '800',
		fontSize: '3vw',
		// whiteSpace: 'pre-wrap',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexWrap: 'wrap',
	},
	text: {
		textAlign: 'center',
		textShadow: '-1px -1px 0 #000000,  1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
	},
}));

export default () => {
	const classes = useStyles();
	const fullProps = useSpring({
		from: { opacity: 0, transform: 'translate3d(0, 50px, 0)' },
		to: { opacity: 0.3, transform: 'translate3d(0, 0, 0)' },
		delay: 200,
	});
	const stackProps = useSpring({
		from: { opacity: 0, transform: 'translate3d(0, 50px, 0)' },
		to: { opacity: 0.3, transform: 'translate3d(0, 0, 0)' },
		delay: 400,
	});
	const softwareProps = useSpring({
		from: { opacity: 0, transform: 'translate3d(0, -50px, 0)' },
		to: { opacity: 0.3, transform: 'translate3d(0, 0, 0)' },
		delay: 600,
	});
	const developmentProps = useSpring({
		from: { opacity: 0, transform: 'translate3d(0, 50px, 0)' },
		to: { opacity: 0.3, transform: 'translate3d(0, 0, 0)' },
		delay: 500,
	});
	return (
		<React.Fragment>
			<Container className={classes.container}>
				<div className={classes.text}>
					<animated.div style={fullProps}>Timothy Lee Long</animated.div>
					<animated.div style={stackProps}>FULL STACK</animated.div>
					<animated.div style={softwareProps}>SOFTWARE ENGINEER</animated.div>
					{/* <animated.div style={developmentProps}>ENGINEER</animated.div> */}
				</div>
			</Container>
		</React.Fragment>
	);
};
