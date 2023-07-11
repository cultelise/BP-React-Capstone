import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Display = ({ formData }) => {
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
	}, [formData]);

	return (
		<div id='display'>
			{garments.map((garment) => {
				return <Card key={garment.id} garment={garment} />;
			})}
		</div>
	);
};

export default Display;
