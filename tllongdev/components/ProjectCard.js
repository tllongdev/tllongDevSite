import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	root: {
    display: 'flex',
    flex: '1',
		backgroundColor: '#23232300',
		opacity: 0.9,
    minHeight: 151,
    maxWidth: 345,
    minWidth: '47%'
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#23232390',
	},
	content: {
		flex: '1 0 auto',
	},
	cover: {
		width: 151,
	},
}));

export default function MediaControlCard() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Card className={classes.root} elevation={6}>
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography style={{ fontFamily: 'Hack', fontSize: '2.5vw' }}>
						Translate Object
					</Typography>
					<Typography variant='subtitle1' color='textSecondary' style={{ fontFamily: 'Open Sans' }}>
						iOS Swift app
					</Typography>
				</CardContent>
			</div>
			<CardMedia
				className={classes.cover}
				image='https://upload.wikimedia.org/wikipedia/en/3/3b/Official_Album_Cover_of_%22The_Downward_Spiral%22_by_Nine_Inch_Nails.png'
				title='The Downward Spiral'
			/>
		</Card>
	);
}
