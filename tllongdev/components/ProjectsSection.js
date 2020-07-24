import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ProjectCard from './ProjectCard';

const useStyles = makeStyles(theme => ({
	container: {
		width: '100%',
		height: '100%',
		borderRadius: 0,
		backgroundColor: '#23232330',
		// backgroundImage: 'url(https://vignette.wikia.nocookie.net/starwars/images/e/e0/The_Ultimate_Weapon.jpg)',
		backgroundSize: 'cover',
		opacity: '80%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	projects: {
		width: 'auto',
		height: 'auto',
		minWidth: 333,
		maxWidth: 999,
		marginTop: 64,
		backgroundColor: '#23232300',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexWrap: 'wrap',
	},
}));

export default () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Paper className={classes.container} elevation={0}>
				<Paper className={classes.projects} elevation={0}>
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</Paper>
			</Paper>
		</React.Fragment>
	);
};
