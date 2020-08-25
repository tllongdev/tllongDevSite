import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	media: {
		maxHeight: '100%',
		maxWidth: '100%',
		borderRadius: 3,
		boxShadow: theme.shadows[3],
	},
}));

export default ({ mediaType, media }) => {
	const classes = useStyles();

	return (
		<>
			{mediaType === 'image' ? (
				<img className={classes.media} src={media} alt='' />
			) : (
				<video autoPlay='autoplay' loop='loop' muted className={classes.media} preload='auto' async>
					<source src={media} type='video/mp4' async />
				</video>
			)}
		</>
	);
};
