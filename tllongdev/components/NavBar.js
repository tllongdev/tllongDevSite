import React, { useRef, useState, useLayoutEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import Button from '@material-ui/core/Button';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';
// import TllongdevLogoWhtDotOutlined from '../public/tllongdevLogoWhtDotOutlined.svg';
import TllongdevLogoWhtDot from '../public/tllongdevLogoWhtDot.svg';
import TllLogo from '../public/tll.svg';

const useStyles = makeStyles(theme => ({
	grow: {
		flexGrow: 1,
	},
	navBar: {
		backgroundColor: '#00000090 !important',
		color: '#ededed !important',
		backdropFilter: 'saturate(180%) blur(5px)',
		borderBottom: '1px solid #232323',
	},
	toolBar: {
		maxWidth: 1048,
		width: '100%',
		margin: '0 auto',
		backgroundColor: '#00000000 !important',
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
	// implement smooth scroll
	const scrollTarget = id => typeof document !== 'undefined' && smoothScroll(document.getElementById(id));

	const smoothScroll = function (target) {
		let scrollContainer = target;
		do {
			//find scroll container
			scrollContainer = scrollContainer.parentNode;
			if (!scrollContainer) return;
			scrollContainer.scrollTop += 1;
		} while (scrollContainer.scrollTop == 0);

		let targetY = 0;
		do {
			//find the top of target relatively to the container
			if (target == scrollContainer) break;
			targetY += target.offsetTop;
		} while ((target = target.offsetParent));

		scroll = function (c, a, b, i) {
			i++;
			if (i > 30) return;
			c.scrollTop = a - 90 + ((b - a) / 30) * i;
			setTimeout(function () {
				scroll(c, a, b, i);
			}, 20);
		};
		// start scrolling
		scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
	};
	// end implement smooth scroll

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
			// style={{ backgroundColor: '#000' }}
		>
			{/* <Link href='https://www.linkedin.com/in/timothyleelong/' target='_blank' color='inherit'>
				<MenuItem onClick={() => handleMenuClose()}>
					<IconButton>
						<LinkedInIcon />
					</IconButton>
					<p>Linkedin</p>
				</MenuItem>
			</Link> */}
			<Link
				href='mailto:tllongdev@gmail.com?subject=Reaching Out From Your Website (tllong.dev)&body=Hi Tim.'
				target='_blank'
				color='inherit'
			>
				<MenuItem onClick={() => handleMenuClose()}>
					<EmailIcon style={{ paddingRight: 4 }} />
					<p>tllongdev@gmail.com</p>
				</MenuItem>
			</Link>
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
			<MenuItem onClick={() => (scrollTarget('about'), handleMenuClose())}>
				<IconButton aria-label='contact' color='inherit'>
					<InfoIcon />
				</IconButton>
				<p>About</p>
			</MenuItem>
			<MenuItem onClick={() => (scrollTarget('projects'), handleMenuClose())}>
				<IconButton aria-label='featured projects' color='inherit'>
					{/* <Badge badgeContent={4} color='secondary'> */}
					<WorkIcon />
					{/* </Badge> */}
				</IconButton>
				<p>Projects</p>
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

	const nav = useRef();
	const [navHeight, setNavHeight] = useState(0);
	const [isMobile, setMobile] = useState(false);
	useLayoutEffect(() => {
		nav.current && setNavHeight(nav.current.clientHeight);
	}, [isMobile]);
	const checkIsMobile = () => (window.innerWidth < 960 ? true : false);
	if (typeof window !== 'undefined') {
		window.onresize = () => isMobile !== checkIsMobile && setMobile(checkIsMobile);
	}

	return (
		<React.Fragment>
			{/* <Grow
				appear={true}
				direction='down'
				timeout={{
					appear: 0,
					enter: 0,
					exit: 0,
				}}
				in={!trigger}
			> */}
			<div className={classes.grow}>
				<AppBar className={classes.navBar} ref={nav} elevation={0}>
					<Toolbar className={classes.toolBar}>
						{/* <MenuItem onClick={() => handleScroll(0)}> */}
						{/* <TllLogo style={{ height: 33, width: 'auto' }} /> */}
						{/* <TllongdevLogoWhtDotOutlined style={{ height: 33, width: 'auto' }} /> */}
						<TllongdevLogoWhtDot style={{ height: 33, width: 'auto' }} />
						{/* </MenuItem> */}
						<div className={classes.grow} />
						<div className={classes.sectionDesktop}>
							{/* <MenuItem label='about' onClick={() => handleScroll(0.5)}>
								<IconButton aria-label='contact' color='inherit'>
										<InfoIcon />
									</IconButton>
								<p style={{ fontWeight: 500 }}>intro</p>
							</MenuItem> */}
							{/* <MenuItem onClick={() => handleScroll(1)}>
								<IconButton aria-label='featured projects' color='inherit'>
										<Badge badgeContent={4} color='secondary'>
											<WorkIcon />
										</Badge>
									</IconButton>
								<p style={{ fontWeight: 500 }}>projects</p>
							</MenuItem> */}
							{/* <MenuItem onClick={() => handleMenuClose()}> */}
							{/* <div style={{ margin: 'auto' }}>
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
							</div> */}
							{/* </MenuItem> */}
							<MenuItem>
								<Button
									variant='outlined'
									size='small'
									edge='end'
									aria-label='account of current user'
									aria-controls={menuId}
									aria-haspopup='true'
									onClick={handleProfileMenuOpen}
									color='inherit'
									// style={{ textTransform: 'none' }}
								>
									Contact
								</Button>
							</MenuItem>
						</div>
						<div className={classes.sectionMobile}>
							<IconButton
								aria-label='show more'
								aria-controls={mobileMenuId}
								aria-haspopup='true'
								onClick={handleMobileMenuOpen}
								color='inherit'
								style={{ margin: 0, paddingRight: 0 }}
							>
								<MenuIcon />
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>
				{renderMobileMenu}
				{renderMenu}
			</div>
			{/* </Grow> */}
			<div style={{ paddingTop: `${navHeight}px`, backgroundColor: '#121212' }} />
		</React.Fragment>
	);
}
