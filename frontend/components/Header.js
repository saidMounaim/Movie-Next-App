import styled from 'styled-components';
import { rem } from 'polished';
import { i18n, Link, withTranslation } from '../i18n';
import Nav from './Nav';

const Header = ({ t }) => {
	return (
		<HeaderStyled>
			<div className="container">
				<div className="head">
					<h1>Next Movies 🎞</h1>
					<button type="button" onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}>
						{t('change-locale')}
					</button>
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

export default withTranslation('common')(Header);
