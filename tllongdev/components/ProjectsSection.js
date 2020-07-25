import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ProjectCard from './ProjectCard';
import Typography from '@material-ui/core/Typography';

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
	{
		title: 'Crowd Merit',
		technologies: 'Redwood.js, React, Material UI, GraphQL, Apollo, Prisma, AWS Lambdas, Postgres',
		shortDescription: 'Crowd-sourced algorithmic decision making',
		description: '',
		mediaType: 'video',
		media: testVid,
	},
	{
		title: 'MERTH',
		technologies: 'Puppeteer.js, Traveling Salesman Algorithm, Node.js',
		shortDescription: 'Returns a Home Depot store map with most the efficient shopping route plotted',
		description: '',
		mediaType: 'video',
		media: testVid,
	},
	{
		title: 'Cove',
		technologies: 'React, Redux, Postgres, Sequelize, Express, Node.js, OAuth',
		shortDescription: 'Full Stack eCommerce Website',
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
		backgroundColor: '#23232300',
		backgroundSize: 'cover',
		display: 'flex',
		flexDirection: 'column',
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
