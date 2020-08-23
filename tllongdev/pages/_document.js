import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
// import theme from '../src/theme';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					{/* PWA primary color */}
					{/* <meta name='theme-color' content={theme.palette.primary.main} /> */}

					<meta property='og:type' content='website' />

					<meta property='og:title' content='Timothy Lee Long - Software Engineer' />
					<meta property='og:image' content='https://tllong.dev/tllong.devScreenShot2020-08-04.png' />
					<meta property='og:description' content='Full Stack Software Engineering and Web Development' />
					<meta property='og:url' content='https://tllong.dev' />

					<meta name='og:title' content='Timothy Lee Long - Software Engineer' />
					<meta name='og:description' content=' Full Stack Software Engineering and Web Development' />
					<meta name='og:image' content='https://tllong.dev/tllong.devScreenShot2020-08-04.png' />
					<meta name='og:url' content='https://tllong.dev' />

					<meta name='twitter:title' content='Timothy Lee Long - Software Engineer ' />
					<meta name='twitter:description' content='Full Stack Software Engineering and Web Development' />
					<meta name='twitter:image' content='https://tllong.dev/tllong.devScreenShot2020-08-04.png' />

					<link
						href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap'
						rel='stylesheet'
					/>
					<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />

					<link rel='stylesheet' href='./fonts/fonts.css' />
				</Head>
				<body style={{ overscrollBehaviorY: 'none', overscrollBehaviorX: 'none' }}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async ctx => {
	// Resolution order
	//
	// On the server:
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. document.getInitialProps
	// 4. app.render
	// 5. page.render
	// 6. document.render
	//
	// On the server with error:
	// 1. document.getInitialProps
	// 2. app.render
	// 3. page.render
	// 4. document.render
	//
	// On the client
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. app.render
	// 4. page.render

	// Render app and page and get the context of the page with collected side effects.
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: App => props => sheets.collect(<App {...props} />),
		});

	const initialProps = await Document.getInitialProps(ctx);

	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
	};
};
