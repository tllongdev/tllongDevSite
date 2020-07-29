import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ProjectCard from './ProjectCard';

const transObjVid = './TranslateObjDemo.mp4';

let projects = [
	{
		title: 'Translate Object',
		technologies: 'Swift, Machine Learning, Google APIs',
		shortDescription: 'Real-time object recognition and language translation iOS app',
		description:
			"'Translate Object' is an iOS app written in Swift that utilizes CoreML and the ResNet50 Convolutional Neural Network to identify objects in the mobile device's live camera feed in real-time. The name of the object is then translated to a foreign language of the user's choice in real-time via a Google Cloud Services API. The user can actively switch languages while using the app. The native language is set to the user's mobile device preference. \n\nThis application was created as my 'Hackathon' project at Fullstack Academy. It won the 'Nerd Cred' award for most technically challenging project.",
		mediaType: 'video',
		media: transObjVid,
		links: [
			{ type: 'GitHub', link: 'https://github.com/tllongdev/TranslateObject' },
			{ type: 'YouTube', link: 'https://www.youtube.com/watch?v=evU2vNjY62E' },
		],
	},
	{
		title: 'Le Magasin',
		technologies: 'React, Redux, Postgres, Sequelize, Express, Node.js, OAuth',
		shortDescription: 'Full Stack eCommerce Website',
		description:
			"French for 'store', Le Magasin is a full stack eCommerce website concept. I was one of a team of four developers that created this project. I was responsible for creating the cart, form validation, automated seed file creation, Postgres database schema in Sequelize, Express routes, Redux state management, the overall Bootstrap SASS styling, React components (all hooks), kanban board project management, and Mocha tests. ",
		mediaType: 'video',
		media: './LeMagasinDemo.mp4',
		links: [
			{ type: 'GitHub', link: 'https://github.com/tllongdev/magasin' },
			// { type: 'YouTube', link: 'https://www.youtube.com/watch?v=evU2vNjY62E' },
		],
	},
	{
		title: 'MERTH',
		technologies: 'Puppeteer.js, Traveling Salesman Algorithm, Node.js',
		shortDescription: 'Returns a Home Depot store map with the most efficient shopping route plotted',
		description:
			"MERTH === Most Efficient Route Through HomeDepot... lol what?! Hear me out..:) Many stores now offer same day in-store pickup. Meaning a store employee will go get the items for you. This app aims at making that person's job as efficient as possible! After requesting access to APIs of major shopping chains with no luck, I chose Home Depot because all of the data I needed for a proof-of-concept is available via their mobile website. Given an online cart with items available at a chosen store location, MERTH deploys a headless Chrome web browser to scrape the data, then applies a Traveling Salesman heuristic, finally returns an svg store map with the most efficient route to obtain all items.",
		mediaType: 'image',
		media: './MERTHscrnShot.png',
		links: [
			{ type: 'GitHub', link: 'https://github.com/tllongdev/MERTH' },
			{ type: 'YouTube', link: 'https://youtu.be/comTb7gfHAw' },
		],
	},

	{
		title: 'Crowd Meritocracy',
		technologies: 'Redwood.js, React, Material UI, GraphQL, Apollo, Prisma, AWS Lambdas, Postgres',
		shortDescription: 'Crowd-sourced algorithmic decision making',
		description:
			"'Crowd Meritocracy' is an algorithmic group decision making web application created by myself and two other software engineers as our 'Capstone' project at Fullstack Academy. The app was inspired by the 'Dot Collector', a privately available application used at Bridgewater Associates. Users contribute issues, propose solutions and vote on others’ input in a radically transparent forum wherein algorithms drive a clear, data-driven visualization of which ideas are best (hold the most merit).",
		mediaType: 'image',
		media: './crowdMerit.png',
		links: [
			{ type: 'GitHub', link: 'https://gitlab.com/jtab1/jtab' },
			{ type: 'YouTube', link: 'https://www.youtube.com/watch?v=RV4nW6VXuOE' },
		],
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
							links={project.links}
						/>
					))}
				</Paper>
			</Paper>
		</React.Fragment>
	);
};
