import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Display = () => {
	const [images, setImages] = useState(['1Ew4r_hnEC3E3rRQMqElLocDtA9dEW63b']);

	useEffect(() => {
		// axios
		// 	.get('http://localhost:4000/test')
		// 	.then((res) => console.log(res.data));

		// axios
		// 	.get('http://localhost:4000/test2')
		// 	.then((res) => console.log(res.data));

		axios
			.post('http://localhost:4000/test')
			.then((res) => console.log(res.data));
	}, []);
	return (
		<div>
			{images.forEach((image) => {
				console.log(`https://drive.google.com/uc?id=${image}`);
				return <img src={`https://drive.google.com/uc?id=${image}`} alt='' />;
			})}
		</div>
	);
};

export default Display;
