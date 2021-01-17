import { NextSeo } from 'next-seo';

const Contact = () => {
	const SEO = {
		title: 'Contact Page',
		description: 'just contact page',
	};

	return (
		<>
			<NextSeo {...SEO} />
			<h1>I'm a contact page</h1>
		</>
	);
};

export default Contact;
