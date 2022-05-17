import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

import TllongdevLogoWhtDot from '../public/tllongdevLogoWhtDot.svg';

const useStyles = makeStyles(theme => ({
	footer: {
		display: 'block',
		padding: theme.spacing(3, 3),
		backgroundColor: theme.palette.type === 'light' ? '#fff' : '#000',
		background: 'linear-gradient(#00000000, #00000010)',
	},
	footerContent: {
		width: 1000,
		maxWidth: '100%',
		margin: '0 auto',
		marginTop: theme.spacing(3),
	},
	footerLogo: {
		textAlign: 'center',
		paddingTop: theme.spacing(3),
		display: 'flex',
		maxWidth: '100%',
		margin: 'auto',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
		},
	},
	footerWrapper: {
		display: 'flex',
		width: 1000,
		maxWidth: '100%',
		margin: '0 auto',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: theme.spacing(3, 0, 3),
		[theme.breakpoints.down('md')]: {
			flexWrap: 'wrap',
		},
		[theme.breakpoints.down('sm')]: {
			flexWrap: 'wrap',
			justifyContent: 'center',
		},
	},
	footerCopyright: {
		color: '#888',
		fontSize: 14,
		[theme.breakpoints.down('sm')]: {
			order: 2,
			flexBasis: '100%',
			marginTop: 20,
			textAlign: 'center',
		},
	},
	footerContact: {
		[theme.breakpoints.down('sm')]: {
			order: 1,
			marginLeft: 10,
		},
	},
	footerSocial: {
		margin: 0,
		padding: 0,
		listStyle: 'none',
		display: 'inline-flex',
		verticalAlign: 'middle',
	},
	footerSocialLi: {
		display: 'inline-flex',
		marginRight: 15,
		borderRight: '1px solid #333',
		paddingRight: 15,
	},
}));

export default function Footer(props) {
	const theme = useTheme();
	const classes = useStyles();

	return (
		<>
			<Box component='footer' className={classes.footer}>
				<div className={classes.footerContent}>
					<section>
						<div className={classes.footerLogo}>
							<TllongdevLogoWhtDot style={{ height: 22, width: 'auto' }} />
						</div>
					</section>
					<div className={classes.footerWrapper}>
						<span className={classes.footerCopyright}>
							<span>Copyright</span> © {new Date().getFullYear()} Timothy Lee Long. All rights reserved.
						</span>
						<div className={classes.footerContact}>
							<ul className={classes.footerSocial}>
								<li className={classes.footerSocialLi}>
									<Link href='https://github.com/tllongdev' target='_blank' color='inherit'>
										<IconButton>
											<GitHubIcon fontSize='small' />
										</IconButton>
									</Link>
								</li>
								<li className={classes.footerSocialLi}>
									<Link href='https://www.linkedin.com/in/timothyleelong/' target='_blank' color='inherit'>
										<IconButton>
											<LinkedInIcon fontSize='small' />
										</IconButton>
									</Link>
								</li>
								<li>
									<Link
										href='mailto:tllongdev@gmail.com?subject=Reaching Out From Your Website (tllong.dev)&body=Hi, Tim'
										target='_blank'
										color='inherit'
									>
										<IconButton>
											<EmailIcon fontSize='small' />
										</IconButton>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Box>
		</>
	);
}
