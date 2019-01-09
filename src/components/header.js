import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaGlobeAmericas } from 'react-icons/fa';

import './style.scss';

import gatsbyLogo from '../images/gatsby-icon.png';
import bulmaLogo from '../images/bulma-logo.png';
import owm from '../images/OWM_Graphic.svg';
import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg is-fullheight-with-navbar">
		<Navbar />
		<div className="hero-body">
			<div className="container center">
				<article className="media">
					
					<div className="media-content">
						<div className="content">
							<img src={owm} alt="OWM_Graphic" />
							<p className="subtitle has-text-black is-size-3">
								One World, One Future Together 
								
							</p>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
