import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Display = () => {
	const [garments, setGarments] = useState([]);

	useEffect(() => {
		// axios
		// 	.get('http://localhost:4000/test')
		// 	.then((res) => console.log(res.data));
		axios.get('http://localhost:4000/garment').then((res) => {
			setGarments(res.data);
		});
		// setImages(res.data.files));
		// axios
		// 	.post('http://localhost:4000/test')
		// 	.then((res) => console.log(res.data));
	}, []);

	return (
		<div id='display'>
			{garments.map((garment) => {
				console.log(garment);
				console.log(`https://drive.google.com/uc?id=${garment.imageId}`);
				return (
					<img
						key={garment.id}
						className='image-card'
						src={`https://drive.google.com/uc?id=${garment.imageId}`}
						alt=''
					/>
				);
			})}
		</div>
	);
};

export default Display;
