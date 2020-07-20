import Head from 'next/head';
import NavBar from '../components/NavBar';
import AsciiLogo from '../components/AsciiLogo';

export default function Home() {
	return (
		<>
			<NavBar />
			<AsciiLogo />
		</>
	);
}
