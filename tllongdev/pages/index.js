import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import NavBar from '../components/NavBar';
import AsciiLogo from '../components/AsciiLogo';
import VideoContainer from '../components/VideoContainer';
import BlkContainer from '../components/BlkContainer';
import IntroText from '../components/IntroText';

const video1 = './AIvideo.mp4';
const video2 = './80sRetroMix.mp4';
const video3 = './SpaceTravel.mp4';
const nodeIcon = './node-js.svg';

export default function Home() {
	const ref = useRef(null);
	return (
		<>
			<NavBar />
			<Parallax pages={3} ref={ref}>
				<ParallaxLayer offset={0} speed={1} factor={1}>
					<VideoContainer video={video1} />
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={1} factor={1}>
					<VideoContainer video={video2} />
				</ParallaxLayer>

				<ParallaxLayer offset={2} speed={1} factor={1}>
					<VideoContainer video={video3} />
				</ParallaxLayer>

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
					}}
				>
					{/* <img src={url('bash')} style={{ width: '50%', minWidth: 333 }} /> */}
					{/* <BlkContainer /> */}
          <IntroText/>
				</ParallaxLayer>
			</Parallax>
			<AsciiLogo />
		</>
	);
}
