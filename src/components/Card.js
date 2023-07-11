import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ garment }) => {
	return (
		<div className='image-card'>
			<NavLink to={`/garment/${garment.id}`}>
				<img src={`https://drive.google.com/uc?id=${garment.imageId}`} alt='' />
			</NavLink>
			<div>{garment.name}</div>
		</div>
	);
};

export default Card;
