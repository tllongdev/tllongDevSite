import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		backgroundColor: '#23232300',
		border: '6px solid #181818',
		borderRadius: 12,
		opacity: 0.9,
		minHeight: 151,
		// maxHeight: '%',
		minWidth: 345,
		// width: 345,
		// height: 345,
		margin: '.5%',
	},
	inner: {
		display: 'flex',
		backgroundColor: '#23232300',
		// border: '6px solid #181818',
		// borderRadius: 12,
		// opacity: 0.9,
		// minHeight: 151,
		// maxHeight: '%',
		// minWidth: 345,
		// width: 345,
		// height: 345,
		// margin: '.5%',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#23232390',
		height: '100%',
		minWidth: 222,
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
			<CardActionArea className={classes.inner}>
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography component='h5' variant='h5' style={{ fontFamily: 'sequel_sanssemi_bold_body' }}>
							A Simple Component
						</Typography>
						<Typography variant='subtitle1' color='textSecondary' style={{ fontFamily: 'sequel_sansbook_body' }}>
							React components implement a
						</Typography>
					</CardContent>
				</div>
				<img
					className={classes.cover}
					src={
						'https://upload.wikimedia.org/wikipedia/en/3/3b/Official_Album_Cover_of_%22The_Downward_Spiral%22_by_Nine_Inch_Nails.png'
					}
					alt=''
				/>
			</CardActionArea>
			{/* <CardActionArea> */}
			{/* <CardMedia
					className={classes.cover}
					image='https://upload.wikimedia.org/wikipedia/en/3/3b/Official_Album_Cover_of_%22The_Downward_Spiral%22_by_Nine_Inch_Nails.png'
					title='The Downward Spiral'
				/> */}
			{/* </CardActionArea> */}
		</Card>
	);
}
