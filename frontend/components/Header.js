import styled from 'styled-components';
import { rem } from 'polished';
import Nav from './Nav';

const Header = () => {
	return (
		<HeaderStyled>
			<div className="container">
				<div className="head">
					<h1>Next Movies 🎞</h1>
					<Nav />
				</div>
			</div>
		</HeaderStyled>
	);
};

const HeaderStyled = styled.div`
	background-color: ${(props) => props.theme.colors.primary};
	h1 {
		font-size: ${rem('25px')};
		color: white;
	}
	.head {
		display: flex;
		justify-content: space-between;
	}
`;

export default Header;
