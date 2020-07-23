import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import NavBar from '../components/NavBar';
import AsciiLogo from '../components/AsciiLogo';
import VideoContainer from '../components/VideoContainer';
// import AboutSection from '../components/AboutSection';
import IntroText from '../components/IntroText';
import ImageContainer from '../components/ImageContainer';

const video1 = './AIvideo.mp4';
const video2 = './80sRetroMix.mp4';
const video3 = './SpaceTravel.mp4';
const thisIsFine = './ThisIsFineGolang.png';
const nodeIcon = './node-js.svg';

const DynamicAboutSection = dynamic(() => import('../components/AboutSection'));

export default function Home() {
	const ref = useRef(null);
	return (
		<>
			<NavBar />
			<Parallax pages={3} ref={ref}>
				<ParallaxLayer
					offset={0}
					speed={-0.9}
					factor={3}
					style={{
						background: 'repeating-linear-gradient(-55deg, #232323, #00000080 2px, #232323 6px, #232323 3px)',
						backgroundSize: 'cover',
					}}
				/>

				{/* Video Sections */}
				<ParallaxLayer offset={0} speed={1} factor={1}>
					<VideoContainer video={video1} />
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={1} factor={1}>
					<VideoContainer video={video2} />
				</ParallaxLayer>

				<ParallaxLayer offset={2} speed={1} factor={1}>
					<VideoContainer video={video3} />
				</ParallaxLayer>

				<ParallaxLayer offset={0.98} speed={0.93}>
					<ParallaxLayer offset={0} speed={-0.5} horizontal>
						<ImageContainer image={thisIsFine} />
					</ParallaxLayer>
				</ParallaxLayer>

				{/* Svg Icons */}
				<ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
					<img src={nodeIcon} style={{ width: '15%', marginLeft: '70%', opacity: '70%' }} />
				</ParallaxLayer>

				<ParallaxLayer
					offset={0}
					speed={2}
					factor={1}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						marginTop: 64,
					}}
				>
					{/* <img src={url('bash')} style={{ width: '50%', minWidth: 333 }} /> */}
					{/* <AboutSection /> */}
					<IntroText />
				</ParallaxLayer>

				<ParallaxLayer
					offset={1}
					speed={1}
					factor={1}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexWrap: 'wrap',
					}}
				>
					{/* <AboutSection /> */}
					<DynamicAboutSection />
				</ParallaxLayer>
			</Parallax>
			<AsciiLogo />
		</>
	);
}
