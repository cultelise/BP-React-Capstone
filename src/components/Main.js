import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Display from './Display';
import Form from './Form';
import axios from 'axios';

const Main = () => {
	const [formData, setFormData] = useState({});
	const [searchInput, setSearchInput] = useState('');

	const handleReset = async () => {
		const res = await axios.delete('http://localhost:4000/garment');
		console.log(res);
		setFormData({});
	};

	return (
		<div>
			<SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
			<br />
			<Form formData={formData} setFormData={setFormData} />
			<br />
			<Display formData={formData} searchInput={searchInput} />
			<button onClick={handleReset}>reset garment db</button>
		</div>
	);
};

export default Main;
