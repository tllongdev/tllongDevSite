import React from 'react';
import NavBar from '../components/NavBar';
import AsciiLogo from '../components/AsciiLogo';
import VideoContainer from '../components/VideoContainer';

export default function Home() {
	return (
		<>
			<NavBar />
			<VideoContainer />
			<AsciiLogo />
		</>
	);
}
