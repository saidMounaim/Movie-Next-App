import fetch from 'isomorphic-fetch';
import styled from 'styled-components';
import Card from '../../components/Card';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { withTranslation } from '../../i18n';

const Movies = ({ movies, page, t }) => {
	const SEO = {
		title: 'Movies Page',
		description: 'just movies page',
	};

	const moviesPerPage = 3;
	const moviesLength = movies.length;

	const router = useRouter();

	const totalPages = Math.ceil(moviesLength / moviesPerPage);

	let pages = [];

	for (let p = 1; p <= totalPages; p++) {
		pages.push(p);
	}

	const indexOfLastMovies = page * moviesPerPage;
	const indexOfFirstMovies = indexOfLastMovies - moviesPerPage;
	const filtredMovies = movies.slice(indexOfFirstMovies, indexOfLastMovies);

	return (
		<>
			<NextSeo {...SEO} />
			<div className="container">
				<h1>{t('Latest Movies')}</h1>
				<MoviesStyled>
					{filtredMovies.map((movie) => (
						<Card key={movie.id} movie={movie} />
					))}
				</MoviesStyled>

				<PaginateStyled>
					<button
						disabled={page === 1 ? true : false}
						onClick={() => router.push(`/movies?page=${page - 1}`)}
					>
						Prev
					</button>
					<button
						disabled={page === totalPages ? true : false}
						onClick={() => router.push(`/movies?page=${page + 1}`)}
					>
						Next
					</button>
				</PaginateStyled>
			</div>
		</>
	);
};

const MoviesStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 15px;
	margin-top: 40px;
`;

const PaginateStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 30px;
	button {
		background: #2d3436;
		padding: 7px 17px;
		color: white;
		font-size: 17px;
	}
`;

export const getServerSideProps = async ({ query: { page = 1 } }) => {
	const { API_URL } = process.env;
	const res = await fetch(`${API_URL}/movies`);
	const data = await res.json();

	return {
		props: {
			movies: data,
			page: +page,
		},
	};
};

export default withTranslation('common')(Movies);
