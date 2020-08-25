import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkIcon from '@material-ui/icons/Link';
import ProjectMedia from './ProjectMedia';

const useStyles = makeStyles(theme => ({
	projectCard: {
		minHeight: 320,
		marginBottom: theme.spacing(6),
		padding: 0,
		borderRadius: 8,
		display: 'flex',
		backgroundColor: theme.palette.type === 'light' ? '#fff' : '#000',
		background: 'linear-gradient(#ffffff09, #00000000)',
		border:
			theme.palette.type === 'light' ? `1px solid ${theme.palette.text.primary}` : `1px solid ${theme.palette.divider}`,
		cursor: 'pointer',
		[theme.breakpoints.down('xs')]: {
			minHeight: 480,
		},
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		position: 'relative',
		minWidth: '1px',
		maxWidth: '100%',
		flex: '1 1',
		justifyContent: 'center',
		alignItems: 'center',
	},
	info: {
		minWidth: '100%',
		display: 'flex',
		flexDirection: 'column',
		WebkitBoxPack: 'justify',
		justifyContent: 'space-between',
		flex: '1 1 0%',
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
	},
	top: {
		display: 'flex',
		WebkitBoxAlign: 'center',
		alignItems: 'center',
		WebkitBoxPack: 'justify',
		justifyContent: 'space-between',
		margin: theme.spacing(3),
		[theme.breakpoints.down('xs')]: {
			justifyContent: 'center',
			flexWrap: 'wrap',
		},
	},
	topLeft: {
		display: 'flex',
		flexDirection: 'column',
		WebkitBoxAlign: 'center',
		alignItems: 'left',
		WebkitBoxPack: 'justify',
		justifyContent: 'space-between',
		margin: theme.spacing(0),
		[theme.breakpoints.down('xs')]: {
			justifyContent: 'center',
			alignItems: 'center',
			textAlign: 'center',
		},
	},
	moreInfo: {
		color: theme.palette.type === 'dark' ? '#ededed' : '#ffffff',
		backgroundColor: '#000',
		'&:hover': {
			color: theme.palette.type === 'light' ? '#000000' : '#ffffff',
			border: theme.palette.type === 'light' ? '1px solid #000' : '1px solid #ededed',
		},
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	learnMore: {
		color: theme.palette.type === 'dark' ? '#ededed' : '#ffffff',
		backgroundColor: '#000',
		'&:hover': {
			color: theme.palette.type === 'light' ? '#000000' : '#ffffff',
			border: theme.palette.type === 'light' ? '1px solid #000' : '1px solid #ededed',
		},
		width: '100%',
		order: 3,
		marginBottom: theme.spacing(3),
		[theme.breakpoints.up('sm')]: {
			height: 0,
			width: 0,
			display: 'none',
		},
	},
	bottom: {
		display: 'flex',
		flexDirection: 'column',
		WebkitBoxPack: 'justify',
		justifyContent: 'space-between',
		flex: 1,
		width: '100%',
	},
	middle: {
		marginTop: '0px',
		display: 'flex',
		WebkitBoxPack: 'justify',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: theme.spacing(3),
		[theme.breakpoints.down('xs')]: {
			flexWrap: 'wrap',
			justifyContent: 'space-between˝',
			alignItems: 'center',
		},
	},
	shortDescription: {
		fontWeight: 500,
		fontSize: 14,
		[theme.breakpoints.down('xs')]: {
			order: 2,
		},
	},
	mediaBox: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		// borderRadius: 12,
		overflow: 'hidden',
		width: 151,
		minWidth: '40%',
		height: 151,
		marginLeft: theme.spacing(3),
		[theme.breakpoints.down('xs')]: {
			order: 1,
			marginLeft: theme.spacing(0),
			paddingBottom: theme.spacing(3),
			height: 180,
			width: '100%',
		},
	},
	footerWrapper: {
		color: 'inherit',
		display: 'inline-flex',
		WebkitBoxPack: 'center',
		alignItems: 'center',
		textDecoration: 'none',
	},
	footer: {
		flex: '1 1',
		// height: theme.spacing(3),
		maxHeight: theme.spacing(7),
		padding: theme.spacing(0, 3),
		display: 'flex',
		alignItems: 'center',
		// justifyContent: 'flex-start',
		borderTop:
			theme.palette.type === 'light'
				? `1px solid ${theme.palette.background.default}`
				: `1px solid ${theme.palette.divider}`,
		borderRadius: '0 0 8px 8px',
		fontWeight: 500,
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		width: '100%',
		overflowX: 'scroll',
		textAlign: 'left',
		overflowScrolling: 'touch',
		WebkitOverflowScrolling: 'touch',
	},
	footerText: {
		fontSize: 12.5,
		// fontWeight: 600,
		[theme.breakpoints.down('md')]: {
			overflow: 'none',
			fontSize: 11,
			whiteSpace: 'normal',
			overflow: 'none',
		},
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	//modal
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#12121290',
		outline: 'none',
		maxHeight: '100vh',
		cursor: 'pointer',
	},
	paper: {
		width: '99vw',
		maxWidth: 1048,
		maxHeight: '99vh',
		backgroundColor: theme.palette.type === 'light' ? '#fff' : '#000',
		border:
			theme.palette.type === 'light'
				? `1px solid ${theme.palette.text.primary}`
				: `1px solid ${theme.palette.action.disabled}`,
		borderRadius: 8,
		padding: theme.spacing(2, 4, 3),
		outline: 'none',
		overflowY: 'scroll',
	},
	modalMediaBox: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		// borderRadius: 12,
		overflow: 'hidden',
		width: 'auto',
		height: '50vh',
		// minWidth: '30%',
		// maxHeight: '50vh',
		// whiteSpace: 'no-wrap',
	},
	// modalMedia: {
	// 	display: 'flex',
	// 	alignItems: 'center',
	// 	justifyContent: 'center',
	// 	height: 'fit-content',
	// 	maxHeight: 'fit-content',
	// 	// width: 'fit-content',
	// 	border: `8px solid ${theme.palette.divider}`,
	// },
	modalBackButton: {
		color: theme.palette.text.secondary,
		marginTop: theme.spacing(3),
		[theme.breakpoints.down('sm')]: {
			marginBottom: theme.spacing(6),
			width: '100%',
		},
	},
}));

export default ({ title, headline, technologies, shortDescription, description, mediaType, media, links }) => {
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
			<Card className={classes.projectCard} elevation={6}>
				<div className={classes.container} onClick={handleOpen}>
					<div className={classes.info}>
						<div className={classes.top}>
							<div className={classes.topLeft}>
								<h3
									style={{ fontSize: `clamp(20px,min(((1vw + 1vh)/2)*2), 28px)`, fontWeight: 600, margin: '0px 0px' }}
								>
									{title}
								</h3>
								<Typography variant='body1' component='div' style={{ fontWeight: 700, fontSize: 12, marginTop: 6 }}>
									{headline}
								</Typography>
							</div>
							<Button variant='outlined' size='small' className={classes.moreInfo}>
								more info
							</Button>
						</div>
						<div className={classes.bottom}>
							<div className={classes.middle}>
								<Typography variant='body2' component='h4' className={classes.shortDescription}>
									{shortDescription}
								</Typography>
								<div className={classes.mediaBox}>
									<ProjectMedia mediaType={mediaType} media={media} />
								</div>
							</div>
							{/* <div className={classes.footerWrapper}> */}
							<div className={classes.footer}>
								{/* <Button variant='outlined' size='small' className={classes.learnMore}>
									learn more
								</Button> */}
								<Typography variant='caption' component='h4' className={classes.footerText}>
									{technologies}
								</Typography>
								<Button variant='outlined' size='small' className={classes.learnMore}>
									learn more
								</Button>
							</div>
							{/* </div> */}
						</div>
					</div>
					{/* <div className={classes.mediaBox}>
						<ProjectMedia mediaType={mediaType} media={media} />
					</div> */}
				</div>
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
									{/* <div className={classes.modalMedia}> */}
									<ProjectMedia mediaType={mediaType} media={media} />
									{/* </div> */}
								</div>
								<h2 style={{ fontSize: `clamp(20px,min(((1vw + 1vh)/2)*2), 28px)` }} id='transition-modal-title'>
									" {title} "{' '}
									{links.map((link, key) => (
										<IconButton key={key} href={link.link} target='_blank'>
											{link.type === 'GitHub' ? (
												<GitHubIcon fontSize='small' />
											) : link.type === 'YouTube' ? (
												<YouTubeIcon fontSize='small' />
											) : (
												<LinkIcon fontSize='small' />
											)}
										</IconButton>
									))}
								</h2>
								<p style={{ fontSize: `clamp(14px,min(((1vw + 1vh)/2)*2), 16px)` }} id='transition-modal-description'>
									{description}
								</p>
								<p style={{ fontSize: `clamp(12px,min(((1vw + 1vh)/2)*2), 14px)` }} id='transition-modal-description'>
									Technologies: {technologies}
								</p>
								<Button
									variant='outlined'
									size='small'
									color='inherit'
									startIcon={<ArrowBackIosIcon />}
									className={classes.modalBackButton}
								>
									Back
								</Button>
							</div>
						</div>
					</Fade>
				</Modal>
			</div>
		</>
	);
};
