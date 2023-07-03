import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { GiGreatPyramid } from 'react-icons/gi';

const Gate = () => {
	const styleActiveLink = ({ isActive }) => {
		return {
			color: isActive
				? '#ff0000'
				: 'color: linear-gradient(to bottom right,hsl(0, 100%, 50%),hsl(39, 100%, 50%),hsl(60, 100%, 50%),hsl(120, 100%, 25%),hsl(240, 100%, 55%),hsl(300, 100%, 25%))',
		};
	};
	const handleClick = (e) => {
		console.log('here');
	};
	return (
		<div id='gate-main'>
			<NavLink style={styleActiveLink} to={'/auth'}>
				<IconContext.Provider value={{ className: 'pyramid-icon' }}>
					<GiGreatPyramid />
				</IconContext.Provider>
			</NavLink>
		</div>
	);
};

export default Gate;
