import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';
import TllongdevLogoWht from '../public/tllongdevLogoWht.svg';
import TllLogo from '../public/tll.svg';
import Vercel from '../public/vercel.svg';

const useStyles = makeStyles(theme => ({
	grow: {
		flexGrow: 1,
	},
	navBar: {
		backgroundColor: '#23232390',
		color: '#ededed',
		textAlign: 'center',

		// height: 5,
	},
	toolBar: {
		maxWidth: 1048,
		width: '100%',
		margin: '0 auto',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('xs')]: {
			display: 'block',
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
}));

export default function NavBar({ parRef, handleScroll }) {
	const classes = useStyles();
	const trigger = useScrollTrigger({ options: { disableHysteresis: true, target: parRef.current, threshold: 1 } });
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = event => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>login</MenuItem>
			{/* <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
		</Menu>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem onClick={() => (handleScroll(0.5), handleMenuClose())}>
				<IconButton aria-label='contact' color='inherit'>
					<InfoIcon />
				</IconButton>
				<p>about</p>
			</MenuItem>
			<MenuItem onClick={() => (handleScroll(1), handleMenuClose())}>
				<IconButton aria-label='featured projects' color='inherit'>
					{/* <Badge badgeContent={4} color='secondary'> */}
					<WorkIcon />
					{/* </Badge> */}
				</IconButton>
				<p>projects</p>
			</MenuItem>
			<Link href='https://github.com/tllongdev' target='_blank' color='inherit'>
				<MenuItem onClick={() => handleMenuClose()}>
					<IconButton>
						<GitHubIcon />
					</IconButton>
					<p>Github</p>
				</MenuItem>
			</Link>
			<Link href='https://www.linkedin.com/in/timothyleelong/' target='_blank' color='inherit'>
				<MenuItem onClick={() => handleMenuClose()}>
					<IconButton>
						<LinkedInIcon />
					</IconButton>
					<p>Linkedin</p>
				</MenuItem>
			</Link>
			<Link
				href='mailto:tllongdev@gmail.com?subject=Reaching Out From Your Website (tllong.dev)&body=Hi, Tim'
				target='_blank'
				color='inherit'
			>
				<MenuItem onClick={() => handleMenuClose()}>
					<IconButton>
						<EmailIcon />
					</IconButton>
					<p>tllongdev@gmail.com</p>
				</MenuItem>
			</Link>
			{/* <MenuItem onClick={handleProfileMenuOpen}>
				<Avatar
					aria-label='account of current user'
					aria-controls='primary-search-account-menu'
					aria-haspopup='true'
					color='inherit'
				>
					<AccountCircle />
				</Avatar>
			</MenuItem> */}
		</Menu>
	);

	return (
		<React.Fragment>
			<Grow
				appear={true}
				direction='down'
				timeout={{
					appear: 0,
					enter: 0,
					exit: 0,
				}}
				in={!trigger}
			>
				<div className={classes.grow}>
					<AppBar position='fixed' className={classes.navBar}>
						<Toolbar className={classes.toolBar}>
							<MenuItem onClick={() => handleScroll(0)}>
								<TllLogo style={{ height: 33, width: 'auto' }} />
							</MenuItem>
							<div className={classes.grow} />
							<div className={classes.sectionDesktop}>
								<MenuItem label='about' onClick={() => handleScroll(0.5)}>
									{/* <IconButton aria-label='contact' color='inherit'>
										<InfoIcon />
									</IconButton> */}
									<p style={{ fontWeight: 600 }}>intro</p>
								</MenuItem>
								<MenuItem onClick={() => handleScroll(1)}>
									{/* <IconButton aria-label='featured projects' color='inherit'>
										<Badge badgeContent={4} color='secondary'>
											<WorkIcon />
										</Badge>
									</IconButton> */}
									<p style={{ fontWeight: 600 }}>projects</p>
								</MenuItem>
								<MenuItem onClick={() => handleMenuClose()}>
									<IconButton href='https://github.com/tllongdev' target='_blank'>
										<GitHubIcon />
									</IconButton>
									<IconButton href='https://www.linkedin.com/in/timothyleelong/' target='_blank'>
										<LinkedInIcon />
									</IconButton>
									<IconButton
										href='mailto:tllongdev@gmail.com?subject=Reaching Out From Your Website (tllong.dev)&body=Hi, Tim'
										target='_blank'
									>
										<EmailIcon />
									</IconButton>
								</MenuItem>
								{/* <MenuItem>
									<Avatar
										edge='end'
										aria-label='account of current user'
										aria-controls={menuId}
										aria-haspopup='true'
										onClick={handleProfileMenuOpen}
										color='inherit'
									>
										<AccountCircle />
									</Avatar>
								</MenuItem> */}
							</div>
							<div className={classes.sectionMobile}>
								<IconButton
									aria-label='show more'
									aria-controls={mobileMenuId}
									aria-haspopup='true'
									onClick={handleMobileMenuOpen}
									color='inherit'
								>
									<MenuIcon />
								</IconButton>
							</div>
						</Toolbar>
					</AppBar>
					{renderMobileMenu}
					{renderMenu}
				</div>
			</Grow>
		</React.Fragment>
	);
}
