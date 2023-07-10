import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Display from './Display';
import Form from './Form';
import axios from 'axios';

const Main = () => {
	const [formData, setFormData] = useState({});

	const handleReset = async () => {
		const res = await axios.delete('http://localhost:4000/garment');
		console.log(res);
	};

	return (
		<div>
			<SearchBar />
			<br />
			<Form formData={formData} setFormData={setFormData} />
			<br />
			<Display />
			<button onClick={handleReset}>reset garment db</button>
		</div>
	);
};

export default Main;
