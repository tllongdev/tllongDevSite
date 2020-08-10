import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';

const wellVersedIn = [
	'Javascript',
	'React',
	'Redux',
	'Node.js',
	'Express',
	'Postgres',
	'Sequelize',
	// 'Object Oriented Programming',
	// 'Functional Programming',
	'GraphQL',
	'Apollo',
	'Git',
	'Material UI',
	'Bootstrap',
	'HTML5',
	'CSS3',
	'SASS',
	'Agile (Scrum)',
	'Next.js',
	'Puppeteer.js',
	'Kanban Boards',
	'Mocha',
	'Chai',
	'Jasmine',
	'Jest',
];

const knowledgeableIn = [
	'Swift',
	'Typescript',
	'MongoDB',
	'MySQL',
	'GSAP',
	'Three.js',
	'AWS Lambdas',
	'Prisma',
	'TypeORM',
	'TypeGraphQL',
	'CoreML',
	"Google Cloud API's",
];

const otherInterests = [
	'Musician',
	'Multi-Instrumentalist',
	'Audio Engineer',
	'Traveling',
	'Chess',
	'History',
	'Running',
	'Cycling',
	'Hiking',
	'Long Range Target Shooting',
	'Cat Dad', 
	'Animal Lover', 
	'Electrical Engineering',
	'Alternative Energy',
	'motorcycle and auto mechanics',
];

const continuingToLearn = ['Python', 'Ruby on Rails', 'GPT'];

const useStyles = makeStyles(theme => ({
	aboutTitle: {
		fontSize: 14,
		fontWeight: 700,
		marginTop: 0,
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center',
			fontSize: 24,
		},
	},
	about: {
		margin: '30px 0px',
	},
	aboutColumn: {
		flex: '1 1 0%',
	},
	aboutItemInner: {
		padding: '10px 0px',
	},
	aboutItemInnerRow: {
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
	},
	aboutItemInnerText: {
		margin: 0,
	},
	aboutItemInnerText: {
		margin: '14px 0px',
	},
	hr: {
		borderWidth: 1,
		borderColor: '#232323',
		margin: 0,
	},
}));

export default props => {
	const classes = useStyles();

	return (
		<>
			<Box className={classes.overviewBody}>
				<h2 className={classes.aboutTitle}>About</h2>
				<span>
					<div className={classes.about}>
						<div className={classes.aboutItem}>
							<div className={classes.aboutItemInner}>
								<div className={classes.aboutItemInnerRow}>
									<h4 className={classes.aboutItemInnerText}>Well versed in:</h4>
									<div className={classes.aboutItemInnerChips}>
										<span>
											{wellVersedIn.map((e, key) => (
												<Chip
													key={key}
													label={e}
													variant='outlined'
													size='small'
													style={{ margin: 3, backgroundColor: '#00000080' }}
												/>
											))}
										</span>
									</div>
								</div>
							</div>
							<hr className={classes.hr} />
						</div>
						<div className={classes.aboutItem}>
							<div className={classes.aboutItemInner}>
								<div className={classes.aboutItemInnerRow}>
									<h4 className={classes.aboutItemInnerText}>Knowledgeable in:</h4>
									<div className={classes.aboutItemInnerChips}>
										<span>
											{knowledgeableIn.map((e, key) => (
												<Chip
													key={key}
													label={e}
													variant='outlined'
													size='small'
													style={{ margin: 3, backgroundColor: '#00000080' }}
												/>
											))}
										</span>
									</div>
								</div>
							</div>
							<hr className={classes.hr} />
						</div>
						<div className={classes.aboutItem}>
							<div className={classes.aboutItemInner}>
								<div className={classes.aboutItemInnerRow}>
									<h4 className={classes.aboutItemInnerText}>Continuing to learn:</h4>
									<div className={classes.aboutItemInnerChips}>
										<span>
											{continuingToLearn.map((e, key) => (
												<Chip
													key={key}
													label={e}
													variant='outlined'
													size='small'
													style={{ margin: 3, backgroundColor: '#00000080' }}
												/>
											))}
										</span>
									</div>
								</div>
							</div>
							<hr className={classes.hr} />
						</div>
						<div className={classes.aboutItem}>
							<div className={classes.aboutItemInner}>
								<div className={classes.aboutItemInnerRow}>
									<h4 className={classes.aboutItemInnerText}>Other Roles and Interests:</h4>
									<div className={classes.aboutItemInnerChips}>
										<span>
											{otherInterests.map((e, key) => (
												<Chip
													key={key}
													label={e}
													variant='outlined'
													size='small'
													style={{ margin: 3, backgroundColor: '#00000080' }}
												/>
											))}
										</span>
									</div>
								</div>
							</div>
							<hr className={classes.hr} />
						</div>
					</div>
				</span>
			</Box>
		</>
	);
};
