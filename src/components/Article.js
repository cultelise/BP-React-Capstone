import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
	const [garment, setGarment] = useState('');
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:4000/garment/${id}`)
			.then((res) => {
				console.log(res.data);
				setGarment(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			{`Article: ${id}`}
			{garment ? (
				<img src={`https://drive.google.com/uc?id=${garment.imageId}`} alt='' />
			) : null}
		</div>
	);
};

export default Article;
