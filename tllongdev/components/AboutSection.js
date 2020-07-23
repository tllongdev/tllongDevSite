import React, { useRef, useState } from 'react';
import Iframe from 'react-iframe';
import { makeStyles } from '@material-ui/core/styles';

const gitProfileImage = './tllongdevGithubProfileImage.jpeg';

const useStyles = makeStyles(theme => ({
	terminalContainer: {
		width: '60%',
		height: '60%',
		minWidth: 333,
		maxWidth: 777,
		borderRadius: 12,
		backgroundColor: '#232323',
		color: 'ededed',
		fontFamily: 'krungthepregular',
		// fontWeight: 'bolder',
		fontSize: '2em',
		whiteSpace: 'pre-wrap',
		padding: 9,
		opacity: 0.8,
		// display: 'flex',
		// alignItems: 'center',
		// justifyContent: 'center',
		// flexWrap: 'wrap',
	},
	imageContainer: {
		width: '27%',
		minWidth: 200,
		maxWidth: 280,
		height: '27%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 22,
	},
	circle: {
		borderRadius: '50%',
		width: '100%',
		paddingTop: '100%',
		overflow: 'hidden',
		// background: '#fff',
		backgroundImage: `url(${gitProfileImage})`,
		backgroundSize: 'cover',
		opacity: '80%',
	},
	image: {
		objectFit: 'cover',
		// display: 'block',
		// width: '100%',
		// height: 'auto',
	},
}));

export default () => {
	const classes = useStyles();
	const terminal = useRef();

	// $(terminal).t({
	// 	caret: '<span style="color:hotpink;">•</span>',
	// 	typing: function (elm, chr) {
	// 		if (chr.match(/\-trigger/)) $('#pow-txt').show().delay(500).fadeOut(0);
	// 	},
	// });

	return (
		<>
			<div className={classes.imageContainer}>
				<div className={classes.circle}>{/* <img src={gitProfileImage} alt='' className={classes.image} /> */}</div>
			</div>
			<div className={classes.terminalContainer}>
				<Iframe
					url='http://127.0.0.1:5500/index.html'
					allow='autoplay'
					width='100%'
					height='100%'
					display='initial'
					position='relative'
					frameBorder='0'
				/>
				{/* <pre ref={terminal} style={{ whiteSpace: 'pre-wrap', fontFamily: 'krungthepregular' }}>
					Hello{' '}
					<ins>
						<span></span>
					</ins>
				</pre> */}
			</div>
		</>
	);
};
