import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
	container: {
		position: 'relative',
		minWidth: '100%',
		minHeight: '100%',
		overflow: 'hidden',
		marginBottom: 500,
		padding: 0,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		zIndex: -1,
	},
	video: {
		minWidth: '100%',
		minHeight: '100%',
	},
}));

let videoSource = './80sRetroMix.mp4';

export default () => {
	const classes = useStyles();
	const [checked, setChecked] = React.useState(true);
	return (
		<React.Fragment>
			<Fade in={true} timeout={50}>
				<Container className={classes.container}>
					<video
						autoPlay='autoplay'
						loop='loop'
						muted
						className={classes.video}
					>
						<source src={videoSource} type='video/mp4' />
					</video>
					{/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
				</Container>
			</Fade>
		</React.Fragment>
	);
};
