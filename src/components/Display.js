import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Display = () => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		// axios
		// 	.get('http://localhost:4000/test')
		// 	.then((res) => console.log(res.data));
		axios
			.get('http://localhost:4000/test2')
			.then((res) => setImages(res.data.files));
		// axios
		// 	.post('http://localhost:4000/test')
		// 	.then((res) => console.log(res.data));
	}, []);

	return (
		<div id='display'>
			{images.map((image) => {
				console.log(image);
				console.log(`https://drive.google.com/uc?id=${image.id}`);
				return (
					<img
						key={image.name}
						className='image-card'
						src={`https://drive.google.com/uc?id=${image.id}`}
						alt=''
					/>
				);
			})}
		</div>
	);
};

export default Display;
