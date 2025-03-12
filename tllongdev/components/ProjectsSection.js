import React from 'react';
import ProjectCard from './ProjectCard';

const transObjVid = './TranslateObjDemo.mp4';
const qodexLaptop = './qodex-laptop-1.png';
const cvsDiag = './CVS_Park_process_diag.png';
const zWalletVideo = './Zooyza_Z_Wallet_video.mp4'

let projects = [
	{
		title: 'CVS Health / Aetna \n Cloud Cost Optimization Application',
		headline: 'Cloud Infrastructure Cost Optimization Applications',
		technologies: 'Azure Functions, Databricks, Docker, Kubernetes, React.js, Next.js, Power BI',
		shortDescription:
			'Cloud Infrastructure Cost Optimization Applications for CVS Health / Aetna that save the company millions of dollars annually.',
		description:
			'CVS Health / Aetna is a Fortune 5 company with a massive cloud infrastructure footprint (Azure, GCP, AWS). I am part of the team that is developing cloud cost optimization applications that save the company millions of dollars annually. The applications are built on Azure Functions, Databricks, React.js, Next.js, Power BI, and Grafana. The applications provide insights into cloud infrastructure costs, identify cost saving opportunities, provide recommendations to optimize cloud infrastructure costs, and applications bult from end-to-end to act on recommendations and provide visibility and reporting: Automated Virtual Machine Up/Down "Parking", Virtual Machine Right Sizing, Orphan Disk Deletion, Reporting Analytics.',
		mediaType: 'image',
		media: cvsDiag,
		links: [
			{ type: 'link', link: 'https://www.cvs.com/' },
		],
	},
	{
		title: 'Qodex',
		headline: 'Revenue Cycle Management Performance Elevating Platform ',
		technologies: 'SQL Server, Databricks, C#, Python, Vue.js, Azure DevOps',
		shortDescription:
			'Qodex is an AI-powered "Revenue Cycle Management Performance Elevating Platform" utilized by hospitals, health care providers, and goverment.',
		description:
		'Qodex is a "Revenue Cycle Management Performance Elevating Platform" in use at top hospitals, health care providers, and government. The various modules that comprise Qodex provide AI-powered analytics, auditing, claim denials management and prevention, and more. At Qodex, I am part of the core development team creating and maintaining the "Quality Audit", and "Productivity" modules.',
		mediaType: 'image',
		media: qodexLaptop,
		links: [
			{ type: 'link', link: 'https://risefoc.com/qodex' },
			// { type: 'YouTube', link: 'https://www.youtube.com/watch?v=evU2vNjY62E' },
		],
	},
	{
		title: 'Z-Wallet',
		headline: 'Mobile E-Wallet Solution',
		technologies: 'Xamarin, SQL Server, C#, ASP.Net, Next.js, Azure DevOps',
		shortDescription:
			'Z-Wallet is a mobile banking solution with virtual card generation, quick money transfers, and AI financial guidance.',
		description:
		'Z-Wallet is a mobile banking solution backed by Zooyza, a card issuer and processer, that takes the bank out of banking with features like virtual debit card generation, quick money transfers, and AI financial guidance. I was the lead developer for the Z-Wallet mobile platform.',
		mediaType: 'video',
		media: zWalletVideo,
		links: [
			{ type: 'link', link: 'https://zooyza.com/' },
			// { type: 'YouTube', link: 'https://www.youtube.com/watch?v=evU2vNjY62E' },
		],
	},
	{
		title: 'Translate Object',
		headline: 'Real-time Object Recognition and Language Translation',
		technologies: 'Swift, CoreML, Google Translate API',
		shortDescription:
			'Translate Object is an iOS app utilizing machine learning and language translation to identify objects and translate the name of the object to a language of your choice.',
		description:
			"'Translate Object' is an iOS app written in Swift that utilizes CoreML and the ResNet50 Convolutional Neural Network to identify objects in the mobile device's live camera feed in real-time. The name of the object is then translated to a foreign language of the user's choice in real-time via a Google Cloud Services API. The user can actively switch languages while using the app. The native language is set to the user's mobile device preference. \n\nThis application was created as my 'Hackathon' project at Fullstack Academy. It won the 'Nerd Cred' award for most technically challenging project.",
		mediaType: 'video',
		media: transObjVid,
		links: [
			{ type: 'GitHub', link: 'https://github.com/tllongdev/TranslateObject' },
			{ type: 'YouTube', link: 'https://www.youtube.com/watch?v=evU2vNjY62E' },
		],
	},
	{
		title: 'Le Magasin',
		technologies: 'React, Redux, PostgreSQL, Sequelize, Express, Node.js, OAuth',
		headline: 'Full Stack eCommerce Website',
		shortDescription:
			"French for 'The Store', Le Magasin is a full stack eCommerce website built on the N.E.R.D. stack (Node.js, Express, React, and Databases).",
		description:
			"French for 'store', Le Magasin is a full stack eCommerce website concept. I was one of four developers who created this project during our 10 day 'Stackathon' code sprint at Fullstack Academy. I was responsible for creating the cart, form validation, automated seed file creation, Postgres database schema in Sequelize, Express routes, Redux state management, the overall Bootstrap SASS styling, React components (all hooks), kanban board project management, and Mocha / Chai tests. ",
		mediaType: 'video',
		media: './LeMagasinDemo.mp4',
		links: [
			{ type: 'GitHub', link: 'https://github.com/tllongdev/magasin' },
			// { type: 'YouTube', link: 'https://www.youtube.com/watch?v=evU2vNjY62E' },
		],
	},
	{
		title: 'MERTH',
		technologies: 'Puppeteer.js, Traveling Salesman Algorithm, Node.js',
		headline: 'Web Scraping / Traveling Salesman Algorithm',
		shortDescription:
			'MERTH takes a Home Depot online cart and a chosen Home Depot location, and gives you a store map with the most efficient shopping route plotted!',
		description:
			"M.E.R.T.H. === Most Efficient Route Through HomeDepot... lol what?! Please, hear me out..:) Many stores now offer same day in-store pickup; meaning a store employee will go get the items for you. This app aims at making that person's job as efficient as possible! After requesting access to APIs of major shopping chains with no luck, I chose Home Depot because all of the data I needed for a proof-of-concept is available via their mobile website. Given an online cart with items available at a chosen store location, MERTH deploys a headless Chrome web browser to scrape the data, then applies a Traveling Salesman heuristic, finally returns an svg store map with the most efficient route to obtain all items.",
		mediaType: 'image',
		media: './MERTHscrnShot.png',
		links: [
			{ type: 'GitHub', link: 'https://github.com/tllongdev/MERTH' },
			{ type: 'YouTube', link: 'https://youtu.be/comTb7gfHAw' },
		],
	},

	{
		title: 'Crowd Meritocracy',
		technologies: 'React, Material UI, Apollo, GraphQL, Prisma, AWS Lambdas, PostgreSQL',
		headline: 'Crowd-sourced Algorithmic Decision Making',
		shortDescription:
			'Crowd Meritocracy is an algorithmic group decision making application driven by user interaction in a radically transparent forum where the best ideas win.',
		description:
			"'Crowd Meritocracy' is an algorithmic group decision making web application created by myself and two other software engineers as our 'Capstone' project at Fullstack Academy. The app was inspired by the 'Dot Collector', a privately available application used at Bridgewater Associates. Users contribute issues, propose solutions and vote on others’ input in a radically transparent forum wherein algorithms drive a clear, data-driven visualization of which ideas are best (hold the most merit).",
		mediaType: 'image',
		media: './crowdMerit.png',
		links: [
			{ type: 'GitHub', link: 'https://gitlab.com/jtab1/jtab' },
			{ type: 'YouTube', link: 'https://www.youtube.com/watch?v=RV4nW6VXuOE' },
		],
	},
];

const ProjectsSection = () => {
	return (
		<>
			{projects.map((project, key) => (
				<ProjectCard
					key={key}
					title={project.title}
					headline={project.headline}
					technologies={project.technologies}
					shortDescription={project.shortDescription}
					description={project.description}
					mediaType={project.mediaType}
					media={project.media}
					links={project.links}
				/>
			))}
		</>
	);
};
export default ProjectsSection;