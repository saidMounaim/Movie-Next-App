import styled from 'styled-components';
import { rem } from 'polished';
import Link from 'next/link';

const Card = ({ movie }) => {
	const { API_URL } = process.env;
	return (
		<CardStyled>
			<Link href="/movies/[slug]" as={`/movies/${movie.slug}`}>
				<a>
					<img src={`${API_URL}${movie.cover.url}`} alt="Movie Img" />
					<div className="info">
						<h4>{movie.title}</h4>
					</div>
				</a>
			</Link>
		</CardStyled>
	);
};

const CardStyled = styled.div`
	border-radius: 10px;
	overflow: hidden;
	position: relative;
	height: 400px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.info {
		width: 100%;
		position: absolute;
		bottom: 0;
		padding: 10px;
		background: ${(props) => props.theme.colors.primary};
		h4 {
			font-size: ${rem('19px')};
			color: white;
		}
	}
`;

export default Card;
