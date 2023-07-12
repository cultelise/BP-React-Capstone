import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

const Card = ({ garment }) => {
	const [images, setImages] = useState([]);
	const [active, setActive] = useState(0);

	useEffect(() => {
		const imageIdArr = garment.photos.map((photo) => {
			return photo.drive_id;
		});

		setImages(imageIdArr);
	}, [garment.photos]);

	const handleLeftClass = () => {
		return active > 0 ? '' : 'hide';
	};

	const handleRightClass = () => {
		console.log(active, images);
		return active < images.length - 1 ? '' : 'hide';
	};

	return (
		<div className='image-card'>
			<div className='image-select'>
				<button
					className={`image-button-left image-button  ${handleLeftClass()}`}
					onClick={() => setActive(active - 1)}
				>
					<IconContext.Provider
						value={{
							className: `left-arrow-icon arrow-icon`,
						}}
					>
						<MdArrowBackIosNew />
					</IconContext.Provider>
				</button>

				<NavLink to={`/garment/${garment.id}`}>
					{images[0] ? (
						<img
							src={`https://drive.google.com/uc?id=${images[active]}`}
							alt=''
						/>
					) : null}
				</NavLink>
				<button
					className={`image-button-right image-button ${handleRightClass()}`}
					onClick={() => setActive(active + 1)}
				>
					<IconContext.Provider
						value={{ className: 'right-arrow-icon arrow-icon' }}
					>
						<MdArrowForwardIos />
					</IconContext.Provider>
				</button>
			</div>
			<div className='garment-title'>{garment.name}</div>
		</div>
	);
};

export default Card;
