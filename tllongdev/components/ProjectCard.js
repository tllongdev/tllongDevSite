import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkIcon from '@material-ui/icons/Link';
import ProjectMedia from './ProjectMedia';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		backgroundColor: '#23232390',
		// background: 'repeating-linear-gradient( #232323, #00000000 2px, #232323 3px, #232323 3px)',
		// border: '6px solid #181818',
		borderRadius: 16,
		// opacity: 0.9,
		minHeight: 151,
		minWidth: 300,
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
		minWidth: 180,
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
		maxHeight: '100%',
		maxWidth: '100%',
	},
	//modal
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#23232390',
		outline: 'none',
		maxHeight: '100vh',
	},
	paper: {
		maxWidth: '90%',
		backgroundColor: '#23232390',
		border: 'none',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		outline: 'none',
	},
	modalMediaBox: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 12,
		overflow: 'hidden',
		width: 'auto',
		height: '50vh',
		// minWidth: '30%',
		// maxHeight: '50vh',
		// whiteSpace: 'no-wrap',
	},
	modalMedia: {
		maxHeight: '100%',
		maxWidth: '100%',
	},
}));

export default ({ title, technologies, shortDescription, description, mediaType, media, links }) => {
	const classes = useStyles();
	const theme = useTheme();

	//modal
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Card className={classes.root} elevation={3}>
				<CardActionArea
					className={classes.inner}
					onClick={(() => (document.body.style.position = 'fixed'), handleOpen)}
				>
					<div className={classes.details}>
						<CardContent className={classes.content}>
							<h2
								style={{ fontSize: `clamp(20px,min(((1vw + 1vh)/2)*2), 28px)`, margin: '0px 0px' }}
								id='transition-modal-title'
							>
								{title}
							</h2>
							<Typography variant='body2'>{shortDescription}</Typography>
							<Typography variant='caption' color='textSecondary'>
								{technologies}
							</Typography>
						</CardContent>
					</div>
					<div className={classes.mediaBox}>
						<ProjectMedia mediaType={mediaType} media={media} />
					</div>
				</CardActionArea>
			</Card>
			{/* modal */}
			<div>
				<Modal
					aria-labelledby='transition-modal-title'
					aria-describedby='transition-modal-description'
					className={classes.modal}
					open={open}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}
				>
					<Fade in={open}>
						<div className={classes.paper} onClick={handleClose}>
							<div className={classes.modalMediaBox}>
								<ProjectMedia mediaType={mediaType} media={media} />
							</div>
							<h2 style={{ fontSize: `clamp(20px,min(((1vw + 1vh)/2)*2), 28px)` }} id='transition-modal-title'>
								{title}{' '}
								{links.map((link, key) => (
									<IconButton key={key} href={link.link} target='_blank'>
										{link.type === 'GitHub' ? <GitHubIcon /> : link.type === 'YouTube' ? <YouTubeIcon /> : <LinkIcon />}
									</IconButton>
								))}
							</h2>
							<p style={{ fontSize: `clamp(11.5px,min(((1vw + 1vh)/2)*2), 16px)` }} id='transition-modal-description'>
								{description}
							</p>
							<p style={{ fontSize: `clamp(11px,min(((1vw + 1vh)/2)*2), 13px)` }} id='transition-modal-description'>
								Technologies: {technologies}
							</p>
						</div>
					</Fade>
				</Modal>
			</div>
		</>
	);
};
