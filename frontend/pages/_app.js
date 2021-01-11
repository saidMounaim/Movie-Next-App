import Header from '../components/Header';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../components/GlobalStyles';

function MyApp({ Component, pageProps }) {
	const theme = {
		colors: {
			primary: '#2d3436',
		},
	};

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Header />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
