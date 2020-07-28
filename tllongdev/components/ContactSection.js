import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(theme => ({
	container: {
		position: 'relative',
		// minWidth: '100%',
		// minHeight: '20vh',
		// maxHeight: '70vh',
		overflow: 'hidden',
		backgroundColor: '#23232300',
		padding: 0,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-bottom',
		// zIndex: -1,
	},
	contact: {
		// minWidth: '100%',
		// minHeight: '100%',
		backgroundColor: '#23232390',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));

export default () => {
	const classes = useStyles();
	const [checked, setChecked] = React.useState(true);
	return (
		<React.Fragment>
			<Fade in={true} timeout={50}>
				<Container className={classes.container}>
					<div className={classes.contact}>
						<Typography component='div'>Thanks for stopping by!</Typography>
						<Typography component='div'>...feel free to reach out :)</Typography>
						<div>
							<IconButton href='https://github.com/tllongdev' target='_blank'>
								<GitHubIcon />
							</IconButton>
							<IconButton href='https://www.linkedin.com/in/timothyleelong/' target='_blank'>
								<LinkedInIcon />
							</IconButton>
							<IconButton
								href='mailto:tllongdev@gmail.com?subject=Reaching Out From Your Website (tllong.dev)&body=Hi, Tim'
								target='_blank'
							>
								<EmailIcon />
							</IconButton>
						</div>
					</div>
				</Container>
			</Fade>
		</React.Fragment>
	);
};
