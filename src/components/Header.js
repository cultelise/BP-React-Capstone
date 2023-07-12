import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<div id='title'>ELISE'S CLOSET</div>
			<nav>
				<ul id='header-links'>
					<li>
						<NavLink to={'/'}>Catalog</NavLink>
					</li>
					{/* <li>
						<NavLink to={'auth'}>Auth</NavLink>
					</li> */}
					<li>
						<NavLink to={'form'}>Form</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
