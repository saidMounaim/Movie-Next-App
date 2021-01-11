import fetch from 'isomorphic-fetch';
import styled from 'styled-components';
import Card from '../components/Card';

const Home = ({ movies }) => {
	console.log(movies);
	return (
		<div className="container">
			<h1>Movies</h1>
			<GridStyled>
				{movies.map((movie) => (
					<Card key={movie.id} movie={movie} />
				))}
			</GridStyled>
		</div>
	);
};

const GridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 15px;
	margin-top: 40px;
`;

export const getServerSideProps = async () => {
	const { API_URL } = process.env;
	const data = await fetch(`${API_URL}/movies`).then((response) => response.json());

	return {
		props: {
			movies: data,
		},
	};
};

export default Home;
