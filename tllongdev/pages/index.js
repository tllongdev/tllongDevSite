import React from 'react';
import NavBar from '../components/NavBar';
import AsciiLogo from '../components/AsciiLogo';
import VideoContainer from '../components/VideoContainer';
import HideAppBar from '../components/HideAppBar';

export default function Home() {
	return (
		<>
			<NavBar />
      {/* <HideAppBar /> */}
			<VideoContainer />
			<AsciiLogo />
		</>
	);
}
