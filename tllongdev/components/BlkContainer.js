import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Container from '@material-ui/core/Container';
import TransitionArray from './TransitionArray';
import { useSpring, animated, config } from 'react-spring';

const useStyles = makeStyles(theme => ({
	container: {
		width: '60%',
		height: '60%',
		minWidth: 333,
		borderRadius: 12,
		backgroundColor: '#23232399',
		// color: 'primary',
		fontFamily: 'Hack',
		fontWeight: 'bolder',
		fontSize: '2em',
		whiteSpace: 'pre-wrap',
	},
}));

export default () => {
	const classes = useStyles();
	const terminal = useRef();
	const props = useSpring({
		from: { opacity: 0, transform: 'translate3d(-100px, 0, 0)' },
		to: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
	});
	return (
		<React.Fragment>
			<Fade in={true} timeout={1000}>
				<Container className={classes.container}>
					{/* <pre ref={terminal} style={{ whiteSpace: 'pre-wrap', fontFamily: 'Hack' }}>
						FULL STACK SOFTWARE DEVELOPMENT
					</pre> */}
					{/* <TransitionArray /> */}
					<animated.div style={props}>FULL STACK SOFTWARE DEVELOPMENT</animated.div>
				</Container>
			</Fade>
		</React.Fragment>
	);
};
