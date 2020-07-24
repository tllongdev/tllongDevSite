import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ProjectCard from './ProjectCard';

const testVid = './SpaceTravel.mp4';

let projects = [
	{
		title: 'Translate Object',
		technologies: 'Swift, Machine Learning, Google APIs',
		shortDescription: 'Real-time object recognition and language translation iOS app',
		description: '',
		mediaType: 'video',
		media: testVid,
	},
];

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
					{projects.map((project, key) => (
						<ProjectCard
							key={key}
							title={project.title}
							technologies={project.technologies}
							shortDescription={project.shortDescription}
							description={project.description}
							mediaType={project.mediaType}
							media={project.media}
						/>
					))}
				</Paper>
			</Paper>
		</React.Fragment>
	);
};
