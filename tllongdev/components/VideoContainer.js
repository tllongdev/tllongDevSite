import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
	container: {
		position: 'relative',
		minWidth: '100%',
		minHeight: '100vh',
		maxHeight: '100vh',
		overflow: 'hidden',
		backgroundColor: '#232323',
		padding: 0,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	media: {
		minWidth: '0%',
		minHeight: '0vh',
	},
}));

export default ({ video, image }) => {
	const classes = useStyles();
	const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

	const updateMedia = () => {
		setDesktop(window.innerWidth > 768);
	};

	useEffect(() => {
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	});

	return (
		<React.Fragment>
			<Fade in={true} timeout={50}>
				<Container className={classes.container}>
					{isDesktop ? (
						<video autoPlay='autoplay' loop='loop' muted className={classes.media} preload='auto' async>
							<source src={video} type='video/mp4' style={{ border: 'none' }} async />
						</video>
					) : (
						<img src={image} alt='' className={classes.media} />
					)}
					{/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
				</Container>
			</Fade>
		</React.Fragment>
	);
};
