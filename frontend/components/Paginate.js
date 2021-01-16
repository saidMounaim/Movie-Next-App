import styled from 'styled-components';
import { useRouter } from 'next/router';

const Paginate = ({ filtredMovies, movies, moviesPerPage, moviesLength }) => {
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
		<PaginateStyled>
			<button disabled={page === 1 ? true : false} onClick={() => router.push(`/movies?page=${page - 1}`)}>
				Prev
			</button>
			<button
				disabled={page === totalPages ? true : false}
				onClick={() => router.push(`/movies?page=${page + 1}`)}
			>
				Next
			</button>
		</PaginateStyled>
	);
};

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

export default Paginate;
