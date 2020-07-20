import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import WorkIcon from '@material-ui/icons/Work';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import TllongdevLogoWht from '../public/tllongdevLogoWht.svg';
import Vercel from '../public/vercel.svg';

const useStyles = makeStyles(theme => ({
	grow: {
		flexGrow: 1,
	},
	navBar: {
		backgroundColor: '#23232350',
		color: '#ededed',
		height: 64,
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

export default () => {
	const classes = useStyles();
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
			<MenuItem>
				<IconButton aria-label='featured projects' color='inherit'>
					<Badge badgeContent={4} color='secondary'>
						<WorkIcon />
					</Badge>
				</IconButton>
				<p>projects</p>
			</MenuItem>
			<MenuItem>
				<IconButton aria-label='show 11 new notifications' color='inherit'>
					<AlternateEmailIcon />
				</IconButton>
				<p>contact</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					aria-label='account of current user'
					aria-controls='primary-search-account-menu'
					aria-haspopup='true'
					color='inherit'
				>
					<AccountCircle />
				</IconButton>
				<p>profile</p>
			</MenuItem>
		</Menu>
	);

	return (
		<div className={classes.grow}>
			<AppBar position='static' className={classes.navBar}>
				<Toolbar>
					{/* <Typography className={classes.title} variant='h6' noWrap>
						tllong.dev
					</Typography> */}
					<TllongdevLogoWht />
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<MenuItem>
							<IconButton aria-label='featured projects' color='inherit'>
								<Badge badgeContent={4} color='secondary'>
									<WorkIcon />
								</Badge>
							</IconButton>
							<p>projects</p>
						</MenuItem>
						<MenuItem>
							<IconButton
								aria-label='show 11 new notifications'
								color='inherit'
							>
								<AlternateEmailIcon />
							</IconButton>
							{/* <p>contact</p> */}
						</MenuItem>
						<MenuItem>
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
						</MenuItem>
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
	);
};