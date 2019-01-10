import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaGlobeAmericas } from 'react-icons/fa';

import './style.scss';
import gatsbyLogo from '../images/gatsby-icon.png';
import bulmaLogo from '../images/bulma-logo.png';
import ows from '../images/OWS_Logo_WhiteBKG.png';

const Navbar = () => (
	<div className="hero-head is-hidden-mobile">
		<nav className="navbar">
			<div className="container">
				<div className="navbar-brand">
					<a
						className="navbar-item"
						href="https://www.oneworldstrong.org"
					>


						<img src={ows} alt="Logo" className="logo" />
					</a>
				</div>
				<div id="navbarMenuHeroA" className="navbar-menu">
					<div className="navbar-end">
						<span className="navbar-item">
							<a
								className="button is-danger is-inverted"
								href="https://oneworldstrong.org"
							>
								<span className="icon">
									<FaGlobeAmericas size="fa-2x" />
								</span>
								<span>One World Strong Website</span>
							</a>
						</span>
					</div>
				</div>
			</div>
		</nav>
	</div>
);

export default Navbar;
