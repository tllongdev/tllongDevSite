import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ProjectsSection from './ProjectsSection';
import AboutSectionNew from './AboutSectionNew';

const useStyles = makeStyles(theme => ({
	overviewBody: {
		minHeight: 'calc(100vh - 336px)',
		transform: 'translateY(-35px)',
		maxWidth: '100%',
		[theme.breakpoints.up('md')]: {
			flexWrap: 'wrap',
			display: 'flex',
		},
	},
	projectsColumn: {
		maxWidth: '100%',
		[theme.breakpoints.up('md')]: {
			marginRight: 80,
			width: 540,
		},
	},
	aboutColumn: {
		flex: '1 1 0%',
	},
}));

export default props => {
	const classes = useStyles();

	return (
		<>
			<Box className={classes.overviewBody}>
				<div className={classes.projectsColumn} id='projects'>
					<ProjectsSection />
				</div>
				<div className={classes.aboutColumn} id='about'>
					<AboutSectionNew />
				</div>
			</Box>
		</>
	);
};
