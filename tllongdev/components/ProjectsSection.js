import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ProjectCard from './ProjectCard';

const useStyles = makeStyles(theme => ({
	container: {
		width: '90%',
		height: '93%',
		minWidth: 333,
		marginTop: 64,
		// borderRadius: 12,
		backgroundColor: '#23232390',
		// fontFamily: 'Open Sans',
		// fontWeight: '800',
		// fontSize: '14vw',
		// whiteSpace: 'pre-wrap',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
    flexWrap: 'wrap',
    flexDirection: 'row,'
	},
}));

export default () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Paper className={classes.container} elevation={3}>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</Paper>
		</React.Fragment>
	);
};
