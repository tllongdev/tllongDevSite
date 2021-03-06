import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';
import OverviewContent from '../components/OverviewContent';
import Footer from '../components/Footer';
import AsciiLogo from '../components/AsciiLogo';

export default function Home() {
	return (
		<>
			<NavBar />
			<Header />
			<ContentContainer>
				<OverviewContent />
			</ContentContainer>
			<Footer />
			<AsciiLogo />
		</>
	);
}
