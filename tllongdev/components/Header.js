import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

const gitProfileImage = 'https://github.com/tllongdev.png';

const useStyles = makeStyles(theme => ({
	header: {
		backgroundColor: theme.palette.type === 'light' ? '#fff' : '#000',
		background: 'linear-gradient(#00000008, #00000000)',
		display: 'flex',
		flexDirection: 'column',
		padding: theme.spacing(6, 0, 9),
	},
	heading: {
		display: 'flex',
		flexDirection: 'column',
		width: 1048,
		maxWidth: '100%',
		padding: theme.spacing(0, 3),
		margin: 'auto',
		flexGrow: 1,
	},
	info: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	avatar: {
		width: 'clamp(90px, min(((1vw + 1vh)/2)*13), 180px)',
		height: 'clamp(90px, min(((1vw + 1vh)/2)*13), 180px)',
		minWidth: 93,
		minHeight: 93,
		marginRight: theme.spacing(3),
		// boxShadow: theme.shadows[9],
		border:
			theme.palette.type === 'light' ? `1px solid ${theme.palette.text.primary}` : `1px solid ${theme.palette.divider}`,
	},
	name: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		flex: '1 1 0%',
	},
	title: {
		marginLeft: '10px',
		display: 'flex',
		alignItems: 'center',
	},
	titleLeft: {
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		minWidth: '0px',
	},
	nameText: {
		letterSpacing: '-.049375rem',
		fontWeight: 600,
		fontSize: 33,
		[theme.breakpoints.down('sm')]: {
			fontSize: 29,
		},
	},
	spacer: {
		flex: 1,
	},
	titleRight: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		maxWidth: '100%',
		flex: 1,
	},
	quote: {
		maxWidth: 280,
		minWidth: 200,
		fontStyle: 'italic',
		textShadow: '#00000010 1px 0 3px',
		textAlign: 'center',
		padding: theme.spacing(2, 1, 0, 1),
	},
	dashboard: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	details: {
		display: 'flex',
		alignItems: 'center',
		marginTop: '10px',
	},
	section: {
		padding: '0px 10px',
	},
	jobTitle: {
		display: 'flex',
		alignItems: 'center',
	},
	// jobTitleChip: {
	// 	border:
	// 		theme.palette.type === 'light' ? `1px solid ${theme.palette.text.primary}` : `1px solid ${theme.palette.divider}`,
	// 	cursor: 'crosshair',
	// },
	contactIcons: {
		display: 'flex',
		alignItems: 'center',
	},
}));

export default function Header(props) {
	const classes = useStyles();

	return (
		<>
			<Box component='header' className={classes.header}>
				<div className={classes.heading}>
					<div className={classes.info}>
						<div
							style={{ display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
						>
							<Avatar alt='Timothy Lee Long' src={gitProfileImage} className={classes.avatar} />
							<div className={classes.name}>
								<div className={classes.title}>
									<div className={classes.titleLeft}>
										<Typography variant='h4' component='h4' className={classes.nameText}>
											Timothy Lee Long
										</Typography>
									</div>
									{/* <span className={classes.spacer} /> */}
								</div>
								<div className={classes.dashboard}>
									<div className={classes.details}>
										<section>
											<div className={classes.section}>
												<div className={classes.jobTitle}>
													<Chip
														label='Software Engineer'
														variant='outlined'
														size='small'
														className={classes.jobTitleChip}
													/>
												</div>
												<p>
													<Link
														href='https://github.com/tllongdev'
														target='_blank'
														color='inherit'
														className={classes.contactIcons}
													>
														<GitHubIcon style={{ fontSize: 14 }} />
														<span style={{ marginLeft: 'calc(4.33333px)' }} />
														<span style={{ fontWeight: 500 }}>tllongdev</span>
													</Link>
												</p>
											</div>
										</section>
									</div>
									{/* <div className={classes.details}>
									<section>
										<div className={classes.section}>
											<div style={{ background: 'transparent', maxWidth: 280, fontStyle: 'italic' }}>
												<h4>" Hi. I'm Tim. I like to make things. Let's make something together. "</h4>
											</div>
										</div>
									</section>
								</div> */}
								</div>
							</div>
						</div>
						<div className={classes.titleRight}>
							{/* <Paper variant='outlined' className={classes.quote}> */}
							<Typography variant='subtitle2' component='h3' className={classes.quote}>
								" Hi. I'm Tim, a Full Stack Software / AI / ML Developer building innovative applications for the modern world. Let's build something together. "
							</Typography>
							{/* </Paper> */}
						</div>
					</div>
				</div>
			</Box>
		</>
	);
}
