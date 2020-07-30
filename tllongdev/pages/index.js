import React, { useRef, useState, useLayoutEffect, createRef } from 'react';
import dynamic from 'next/dynamic';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import NavBar from '../components/NavBar';
import AsciiLogo from '../components/AsciiLogo';
import VideoContainer from '../components/VideoContainer';
// import AboutSection from '../components/AboutSection';
import IntroText from '../components/IntroText';
import ImageContainer from '../components/ImageContainer';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const video1 = './AIvideoMobile.mp4';
const video2 = './80sRetroMix.mp4';
const video3 = './DeathStarPlans.mp4';

const thisIsFine = './ThisIsFineGolang2048.png';

const nodeIcon = './svgIcons/node-js.svg';
const reactIcon = './svgIcons/React-icon.svg';
const postgreSQLIcon = './svgIcons/PostgreSQL.svg';
const graphqlIcon = './svgIcons/graphql.svg';
const nextjsIcon = './svgIcons/next-js.svg';
const reduxIcon = './svgIcons/redux.svg';
const apolloIcon = './svgIcons/apollo.svg';
const typescriptIcon = './svgIcons/typescript.svg';
const vimIcon = './svgIcons/Vim.svg';
const railsIcon = './svgIcons/Rails.svg';
const kubernetesIcon = './svgIcons/Kubernetes.svg';
const awsIcon = './svgIcons/AWS.svg';
const pythonIcon = './svgIcons/python.svg';
const swiftIcon = './svgIcons/swift.svg';

const DynamicAboutSection = dynamic(() => import('../components/AboutSection'));

export default function Home() {
	let parRef = useRef();
	// const [page, setPage] = useState(0);
	const handleScroll = page => parRef.current.scrollTo(page);
	// useLayoutEffect(() => parRef.current.scrollTo(page));

	return (
		<>
			<NavBar parRef={parRef} handleScroll={handleScroll} />
			<Parallax pages={2} scrolling={false} ref={parRef}>
				{/* Video Sections */}

				{/* <ParallaxLayer offset={1} speed={1}>
					<VideoContainer video={video2} />
				</ParallaxLayer> */}

				<ParallaxLayer offset={0.99} speed={0.99} style={{ opacity: '10%' }}>
					<VideoContainer />
				</ParallaxLayer>

				<ParallaxLayer offset={0} speed={-0.3} style={{ opacity: '90%' }}>
					{/* Svg Icons */}
					<ParallaxLayer offset={0.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
						<img src={nodeIcon} style={{ width: '15%', marginLeft: '70%', opacity: '50%' }} />
					</ParallaxLayer>
					<ParallaxLayer offset={0.7} speed={-0.7} style={{ pointerEvents: 'none' }}>
						<img src={reactIcon} style={{ width: '22%', marginLeft: '52%', opacity: '50%' }} />
					</ParallaxLayer>
					<ParallaxLayer offset={0.7} speed={-0.23} style={{ pointerEvents: 'none' }}>
						<img src={swiftIcon} style={{ width: '11%', marginLeft: '60%', opacity: '18%' }} />
					</ParallaxLayer>
					<ParallaxLayer offset={0.2} speed={-0.63} style={{ pointerEvents: 'none' }}>
						<img src={postgreSQLIcon} style={{ width: '22%', marginLeft: '12%', opacity: '18%' }} />
					</ParallaxLayer>
					<ParallaxLayer offset={0.5} speed={-0.9} style={{ pointerEvents: 'none' }}>
						<img src={graphqlIcon} style={{ width: '11%', marginLeft: '30%', opacity: '20%' }} />
					</ParallaxLayer>
					<ParallaxLayer offset={0.5} speed={-0.92} style={{ pointerEvents: 'none' }}>
						<img src={nextjsIcon} style={{ width: '13%', marginLeft: '80%', opacity: '50%' }} />
					</ParallaxLayer>
					<ParallaxLayer offset={0.7} speed={-0.6} style={{ pointerEvents: 'none' }}>
						<img src={reduxIcon} style={{ width: '10%', marginLeft: '4%', opacity: '35%' }} />
					</ParallaxLayer>
					<ParallaxLayer offset={0.2} speed={-0.6} style={{ pointerEvents: 'none' }}>
						<img src={apolloIcon} style={{ width: '11%', marginLeft: '42%', opacity: '50%' }} />
					</ParallaxLayer>
					<ParallaxLayer offset={0.2} speed={-1} style={{ pointerEvents: 'none' }}>
						<img src={vimIcon} style={{ width: '18%', marginLeft: '43%', opacity: '16%' }} />
					</ParallaxLayer>
					<ParallaxLayer offset={0.6} speed={-0.56} style={{ pointerEvents: 'none' }}>
						<img src={typescriptIcon} style={{ width: '10%', marginLeft: '82%', opacity: '35%' }} />
					</ParallaxLayer>
				</ParallaxLayer>

				{/* Sections */}
				{/* <ParallaxLayer
					offset={0}
					speed={1}
					// factor={0.9}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						// marginTop: 64,
						zIndex: 1,
					}}
					onClick={() => handleScroll(1)}
				>
					<IntroText />
				</ParallaxLayer> */}

				<ParallaxLayer offset={0} speed={1}>
					<VideoContainer />
				</ParallaxLayer>
				{/* <ParallaxLayer offset={0} speed={1}>
					<VideoContainer video={video1} image={'./AIvideoFrame0.png'} />
				</ParallaxLayer> */}

				{/* <ParallaxLayer offset={0.01} speed={0.1}>
					<ParallaxLayer offset={0} speed={0.2} horizontal>
						<h1 style={{ color: '#df9687', opacity: 0.6, fontSize: '16vw' }}>TIMOTHY</h1>
					</ParallaxLayer>
				</ParallaxLayer>
				<ParallaxLayer offset={0.09} speed={0.4}>
					<ParallaxLayer offset={0.1} speed={-0.7} horizontal>
						<h1 style={{ color: '#5dbaa8', opacity: 0.6, fontSize: '16vw' }}>LEE</h1>
					</ParallaxLayer>
				</ParallaxLayer> */}
				<ParallaxLayer offset={0.17} speed={0.8}>
					<ParallaxLayer offset={0} speed={0.9} horizontal>
						<h1 style={{ color: '#fdfc74', opacity: 0.6, fontSize: '10vw', width: '100vw' }}>TIMOTHY LEE LONG</h1>
					</ParallaxLayer>
				</ParallaxLayer>
				{/* <ParallaxLayer offset={0.48} speed={0.6}>
					<ParallaxLayer offset={0.185} speed={0.9} horizontal>
						<h1
							style={{
								color: '#5dbaa8',
								opacity: 0.6,
								fontFamily: 'sequel_sanssemi_bold_body',
								fontSize: '10vw',
								width: '100vw',
							}}
						>
							FULL STACK
						</h1>
					</ParallaxLayer>
				</ParallaxLayer> */}
				<ParallaxLayer offset={0.6} speed={1.0}>
					<ParallaxLayer offset={0.19} speed={-0.5} horizontal>
						<h1 style={{ color: '#ededed', opacity: 0.6, fontSize: '10vw' }}>SOFTWARE</h1>
					</ParallaxLayer>
				</ParallaxLayer>
				<ParallaxLayer offset={0.72} speed={1.2}>
					<ParallaxLayer offset={0.2} speed={0.9} horizontal>
						<h1 style={{ color: '#df9687', opacity: 0.6, fontSize: '10vw' }}>ENGINEER</h1>
					</ParallaxLayer>
				</ParallaxLayer>

				<ParallaxLayer
					offset={0}
					speed={1}
					style={{
						display: 'flex',
						alignItems: 'flex-end',
						justifyContent: 'center',
						zIndex: 1,
					}}
					onClick={() => handleScroll(0.5)}
				>
					{/* <ExpandMoreIcon fontSize='large' /> */}
					<ExpandMoreIcon fontSize='large' style={{ opacity: '50%' }} />
					{/* <ExpandMoreIcon fontSize='large' /> */}
				</ParallaxLayer>

				{/* <ParallaxLayer offset={0.98} speed={0.96} style={{ zIndex: -1, opacity: 0.8 }}>
					<ParallaxLayer offset={0} speed={-0.5} horizontal>
						<ImageContainer image={thisIsFine} />
					</ParallaxLayer> */}
				{/* <ParallaxLayer offset={0.99} speed={1} style={{ pointerEvents: 'none' }}>
						<img src={vimIcon} style={{ width: '20%', marginLeft: '20%', opacity: '20%' }} />
					</ParallaxLayer>
					<ParallaxLayer offset={0.99} speed={1.8} style={{ pointerEvents: 'none' }}>
						<img src={railsIcon} style={{ width: '20%', marginLeft: '55%', opacity: '20%' }} />
					</ParallaxLayer>
					<ParallaxLayer offset={0.99} speed={1.2} style={{ pointerEvents: 'none' }}>
						<img src={kubernetesIcon} style={{ width: '20%', marginLeft: '85%', opacity: '20%' }} />
					</ParallaxLayer>
					<ParallaxLayer offset={0.99} speed={1.1} style={{ pointerEvents: 'none' }}>
						<img src={awsIcon} style={{ width: '20%', marginLeft: '45%', opacity: '20%' }} />
					</ParallaxLayer>
					<ParallaxLayer offset={0.99} speed={0.7} style={{ pointerEvents: 'none' }}>
						<img src={pythonIcon} style={{ width: '10%', marginLeft: '6%', opacity: '20%' }} />
					</ParallaxLayer>
					<ParallaxLayer offset={0.99} speed={1.6} style={{ pointerEvents: 'none' }}>
						<img src={swiftIcon} style={{ width: '10%', marginLeft: '5%', opacity: '20%' }} />
					</ParallaxLayer> */}
				{/* </ParallaxLayer> */}

				<ParallaxLayer
					offset={0.99}
					speed={0.93}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexWrap: 'wrap',
					}}
				>
					{/* <AboutSection /> */}
					<DynamicAboutSection onClick={() => handleScroll(1)} />
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={0.9} style={{ zIndex: 0 }}>
					<ParallaxLayer offset={0.6} speed={0.6} horizontal>
						<h1 style={{ color: 'ededed', opacity: 0.6, fontSize: '18vw' }}>PROJECTS</h1>
					</ParallaxLayer>
				</ParallaxLayer>

				<ParallaxLayer
					offset={1}
					speed={1}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						// flexWrap: 'wrap',
					}}
				>
					<ProjectsSection />
				</ParallaxLayer>

				{/* <ParallaxLayer
					offset={1.2}
					speed={1}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexWrap: 'wrap',
					}}
				>
					<ContactSection />
				</ParallaxLayer> */}
			</Parallax>
			<AsciiLogo />
		</>
	);
}
