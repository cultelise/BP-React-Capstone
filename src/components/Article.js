import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

const Article = () => {
	const [garment, setGarment] = useState('');
	const [images, setImages] = useState([]);
	const [active, setActive] = useState(0);
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:4000/garment/${id}`)
			.then((res) => {
				console.log(res.data);
				setGarment(res.data);
				const imageIdArr = res.data.photos.map((photo) => {
					return photo.drive_id;
				});
				setImages(imageIdArr);
			})
			.catch((err) => console.log(err));
	}, []);

	const handleLeftClass = () => {
		return active > 0 ? '' : 'hide';
	};

	const handleRightClass = () => {
		return active < images.length - 1 ? '' : 'hide';
	};

	return (
		<div id='article-display'>
			<div id='article-image'>
				{garment && images[active] ? (
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
						<img
							src={`https://drive.google.com/uc?id=${images[active]}`}
							alt=''
						/>
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
				) : null}
			</div>
			<div id='article-info'>
				<li>{garment.name}</li>
				<li>{garment.style}</li>
				<li>{garment.color}</li>
			</div>
		</div>
	);
};

export default Article;
