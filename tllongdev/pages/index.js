import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import NavBar from '../components/NavBar';
import AsciiLogo from '../components/AsciiLogo';
import VideoContainer from '../components/VideoContainer';
import BlkContainer from '../components/BlkContainer';

let video1 = './AIvideo.mp4';
let video2 = './80sRetroMix.mp4';
let video3 = './SpaceTravel.mp4';
const nodeIcon = './node-js.svg';

const url = (name, wrap = false) =>
	`${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

export default function Home() {
	return (
		<>
			<NavBar />
			<Parallax pages={3} id={'scrollTarget'}>
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
					<img src={nodeIcon} style={{ width: '15%', marginLeft: '70%' }} />
				</ParallaxLayer>

				<ParallaxLayer
					offset={0}
					speed={3}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					{/* <img src={url('bash')} style={{ width: '50%', minWidth: 333 }} /> */}
					{/* <BlkContainer /> */}
				</ParallaxLayer>
			</Parallax>
			<AsciiLogo />
		</>
	);
}
