import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
	container: {
		width: '60%',
		height: '60%',
		minWidth: 333,
		borderRadius: 12,
		backgroundColor: '#23232399',
		// color: 'primary',
		fontFamily: 'krungthepregular',
		// fontWeight: 'bolder',
		fontSize: '2em',
		whiteSpace: 'pre-wrap',
	},
}));

export default () => {
	const classes = useStyles();
	const terminal = useRef();
	return (
		<React.Fragment>
			<Fade in={true} timeout={1000}>
				<Container className={classes.container}>
					<pre ref={terminal} style={{ whiteSpace: 'pre-wrap', fontFamily: 'krungthepregular' }}>
						FULL STACK SOFTWARE DEVELOPMENT
					</pre>
				</Container>
			</Fade>
		</React.Fragment>
	);
};
