import { NextSeo } from 'next-seo';
import fetch from 'isomorphic-fetch';

const About = ({ about }) => {
	const SEO = {
		title: 'About Page',
		description: 'Just your normal about page',
	};

	console.log(about);

	return (
		<>
			<NextSeo {...SEO} />
			<div className="container">
				<h1>{about.title}</h1>
				<p>{about.description}</p>
			</div>
		</>
	);
};

export const getStaticProps = async () => {
	const apiUrl = process.env.API_URL;

	const res = await fetch(`${apiUrl}/pages/1`);
	const data = await res.json();

	return {
		props: {
			about: data,
			revalidate: 30,
		},
	};
};

export default About;
