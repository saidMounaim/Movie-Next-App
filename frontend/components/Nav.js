import styled from 'styled-components';
import { rem } from 'polished';
import Link from 'next/Link';
import { useRouter } from 'next/router';

const Nav = () => {
	const router = useRouter();

	return (
		<NavStyled>
			<ul>
				<li>
					<Link href="/">
						<a className={router.pathname === '/' ? 'active' : ''}>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/movies">
						<a className={router.pathname === '/movies' ? 'active' : ''}>Movies</a>
					</Link>
				</li>
				<li>
					<Link href="/contact">
						<a className={router.pathname === '/contact' ? 'active' : ''}>Contact</a>
					</Link>
				</li>
			</ul>
		</NavStyled>
	);
};

const NavStyled = styled.nav`
	display: flex;
	ul {
		display: flex;
		li {
			font-size: ${rem('17px')};
			color: white;
			margin-left: 20px;

			a {
				color: white;
				text-decoration: none;
				&.active {
					color: orange;
				}
			}
		}
	}
`;

export default Nav;
