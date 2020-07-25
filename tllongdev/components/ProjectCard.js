import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		backgroundColor: '#23232390',
		// background: 'repeating-linear-gradient( #232323, #00000000 2px, #232323 3px, #232323 3px)',
		// border: '6px solid #181818',
		borderRadius: 16,
		// opacity: 0.9,
		minHeight: 151,
		minWidth: 345,
		maxWidth: 444,
		margin: '.5%',
	},
	inner: {
		display: 'flex',
		backgroundColor: '#23232390',
	},
	details: {
		display: 'flex',
		// flexDirection: 'column',
    backgroundColor: '#23232300',
    // borderRadius: 10,
		// overflow: 'hidden',
		height: '100%',
		minWidth: 222,
	},
	content: {
    backgroundColor: '#23232300',
		// flex: '1 0 auto',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		padding: '8px 10px !important',
		// padding: 10,
	},
	mediaBox: {
		display: 'flex',
		alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
		overflow: 'hidden',
		width: 151,
		minWidth: '30%',
		height: 151,
	},
	media: {
		height: '100%',
		width: 'auto',
	},
}));

export default ({ title, technologies, shortDescription, description, mediaType, media }) => {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Card className={classes.root} elevation={3}>
			<CardActionArea className={classes.inner}>
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography component='h5' variant='h5' style={{ fontFamily: 'sequel_sansbold_body' }}>
							{title}
						</Typography>
						<Typography variant='body2' style={{ fontFamily: 'sequel_sansbook_body' }}>
							{shortDescription}
						</Typography>
						<Typography variant='caption' color='textSecondary' style={{ fontFamily: 'sequel_sansbook_body' }}>
							{technologies}
						</Typography>
					</CardContent>
				</div>
				<div className={classes.mediaBox}>
					{mediaType === 'image' ? (
						<img className={classes.media} src={media} alt='' />
					) : (
						<video autoPlay='autoplay' loop='loop' muted className={classes.media}>
							<source src={media} type='video/mp4' />
						</video>
					)}
				</div>
			</CardActionArea>
		</Card>
	);
};
