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
		backgroundColor: '#23232390',
		color: 'ededed',
		fontFamily: 'krungthepregular',
		fontSize: '2em',
		whiteSpace: 'pre-wrap',
		padding: 9,
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
		backgroundImage: `url(${gitProfileImage})`,
		backgroundSize: 'cover',
		opacity: '80%',
	},
	image: {
		objectFit: 'cover',
	},
}));

export default () => {
	const classes = useStyles();
	const terminal = useRef();

	return (
		<>
			<div className={classes.imageContainer}>
				<div className={classes.circle}>{/* <img src={gitProfileImage} alt='' className={classes.image} /> */}</div>
			</div>
			<div className={classes.terminalContainer}>
				<Iframe
					loading='lazy'
					url='https://tllongdev.github.io/AboutSection/'
					// allow='autoplay'
					width='100%'
					height='100%'
					display='initial'
					position='relative'
					frameBorder='0'
				/>
			</div>
		</>
	);
};
