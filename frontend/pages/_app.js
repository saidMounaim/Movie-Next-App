import App from 'next/app';
import Header from '../components/Header';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../components/GlobalStyles';
import { DefaultSeo } from 'next-seo';
import { appWithTranslation } from '../i18n';
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

MyApp.getInitialProps = async (appContext) => ({ ...(await App.getInitialProps(appContext)) });

export default appWithTranslation(MyApp);
