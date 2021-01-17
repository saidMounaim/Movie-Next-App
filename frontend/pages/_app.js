import Header from '../components/Header';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../components/GlobalStyles';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
	const theme = {
		colors: {
			primary: '#2d3436',
		},
	};

	return (
		<>
			<DefaultSeo {...SEO} />
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Header />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
