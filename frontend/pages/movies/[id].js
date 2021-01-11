import fetch from 'isomorphic-fetch';
import getConfig from 'next/config';

const MovieDetail = ({ movie }) => {
	return (
		<div className="container">
			<h1>{movie.title}</h1>
			<p>{movie.description}</p>
		</div>
	);
};

const { publicRuntimeConfig } = getConfig();

export const getServerSideProps = async (context) => {
	const { id } = context.query;

	const data = await fetch(`${publicRuntimeConfig.API_URL}/movies/${id}`).then((response) => response.json());

	return {
		props: {
			movie: data,
		},
	};
};

export default MovieDetail;
