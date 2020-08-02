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
	projectCard: {
		minHeight: 204,
		marginBottom: theme.spacing(6),
		padding: 0,
		borderRadius: 8,
		display: 'flex',
		backgroundColor: '#000',
		border: '1px solid #232323',
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		position: 'relative',
		minWidth: '1px',
		maxWidth: '100%',
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	info: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		flex: '1 1 0%',
	},
	top: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		margin: theme.spacing(3),
	},
	bottom: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		flex: '1 1 0%',
	},
	middle: {
		marginTop: '0px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		margin: theme.spacing(3),
	},
	footer: {
		flex: '1 1',
		height: theme.spacing(3),
		maxHeight: theme.spacing(6),
		padding: theme.spacing(0, 3),
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		borderTop: '1px solid #232323',
		borderRadius: '0 0 8px 8px',
		overflow: 'hidden',
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
		backgroundColor: '#12121290',
		outline: 'none',
		maxHeight: '100vh',
	},
	paper: {
		maxWidth: '95vw',
		maxHeight: '95vh',
		backgroundColor: '#000',
		border: '1px solid #232323',
		borderRadius: 8,
		padding: theme.spacing(2, 4, 3),
		outline: 'none',
		overflowY: 'scroll',
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
			<Card className={classes.projectCard}>
				<CardActionArea className={classes.container} onClick={handleOpen}>
					<div className={classes.info}>
						<div className={classes.top}>
							<h3 style={{ fontSize: `clamp(20px,min(((1vw + 1vh)/2)*2), 28px)`, fontWeight: 600, margin: '0px 0px' }}>
								{title}
							</h3>
						</div>
						<div className={classes.bottom}>
							<div className={classes.middle}>
								<Typography variant='body2' style={{ fontWeight: 500 }}>
									{shortDescription}
								</Typography>
							</div>
							<div className={classes.footer}>
								<Typography variant='caption' style={{ fontWeight: 500, whiteSpace: 'nowrap', overflowX: 'scroll' }}>
									{technologies}
								</Typography>
							</div>
						</div>
					</div>
					{/* <div className={classes.mediaBox}>
						<ProjectMedia mediaType={mediaType} media={media} />
					</div> */}
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
						<div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', outline: 'none' }}>
							<div className={classes.paper} onClick={handleClose}>
								<div className={classes.modalMediaBox}>
									<ProjectMedia mediaType={mediaType} media={media} />
								</div>
								<h2 style={{ fontSize: `clamp(20px,min(((1vw + 1vh)/2)*2), 28px)` }} id='transition-modal-title'>
									{title}{' '}
									{links.map((link, key) => (
										<IconButton key={key} href={link.link} target='_blank'>
											{link.type === 'GitHub' ? (
												<GitHubIcon />
											) : link.type === 'YouTube' ? (
												<YouTubeIcon />
											) : (
												<LinkIcon />
											)}
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
						</div>
					</Fade>
				</Modal>
			</div>
		</>
	);
};
