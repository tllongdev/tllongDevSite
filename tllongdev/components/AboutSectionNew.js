import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';

const wellVersedIn = [
	'Python',
	'C#',
	'Javascript',
	'SQL',
	'Databricks',
	'MLflow',
	'SciKit Learn',
	'OpenCV',
	'PyTorch',
	'NumPy',
	'Pandas',
	'OpenAI',
	'CoreML',
	'TensorFlow',
	'ASP.net',
	'Node.js',
	'React.js',
	'Next.js',
	'Vue.js',
	'Blazor',
	'SQL Server',
	'PySpark',
	'PostgreSQL',
	'Azure Functions',
	'Azure',
	'Google Cloud',
	'Docker',
	'Kubernetes',
	'Xamarin',
	'React Native',
	'Tailwind CSS',
	'Material UI',
	'Agile (Scrum)',
	'Jira',
	'Puppeteer',
	'Beautiful Soup',
	'Requests',
	'Scrapy',
	'Selenium',
	'CI/CD',
];

const knowledgeableIn = [
	'Swift',
	'AWS',
	'Firebase',
	'GSAP',
	'Three.js',
	'Adobe Creative Suite',
	'Figma',
];

const otherInterests = [
	'Musician',
	'Multi-Instrumentalist',
	'Audio Engineer',
	'Traveling',
	'Sailing',
	'Chess',
	// 'History',
	'Running',
	'Cycling',
	'Hiking',
	// 'Long Range Target Shooting',
	// 'Electrical Engineering',
	// 'Sustainable Energy',
	// 'IC and Electric Motors',
];

const continuingToLearn = ['Go', 'In-depth Cloud Infrastructure and Security'];

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
		borderColor: theme.palette.type === 'light' ? `${theme.palette.divider}` : `${theme.palette.divider}`,
		margin: 0,
	},
}));

const AboutSectionNew = props => {
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
													style={{ margin: 3, backgroundColor: '#00000020' }}
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
													style={{ margin: 3, backgroundColor: '#00000020' }}
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
													style={{ margin: 3, backgroundColor: '#00000020' }}
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
													style={{ margin: 3, backgroundColor: '#00000020' }}
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
export default AboutSectionNew;