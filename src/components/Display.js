import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Display = ({ formData, searchInput }) => {
	const [garments, setGarments] = useState([]);
	const [filtered, setFiltered] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:4000/garment').then((res) => {
			console.log('GETALL:', res.data);
			setGarments(res.data);
			setFiltered(res.data);
		});
	}, [formData]);

	useEffect(() => {
		console.log('search', searchInput);
		let newGarments = garments.filter((garment) => {
			let check = false;
			garment.tags.forEach((tag) => {
				if (tag.name.toLowerCase().includes(searchInput.toLowerCase())) {
					check = true;
					console.log(check);
				}
			});
			return check;
		});
		setFiltered(newGarments);
	}, [searchInput]);

	return (
		<div id='display'>
			{filtered.map((garment) => {
				return <Card key={garment.id} garment={garment} />;
			})}
		</div>
	);
};

export default Display;
