import React, { useState } from 'react';

const SearchBar = ({ searchInput, setSearchInput }) => {
	const [input, setInput] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();

		setSearchInput(input.toLowerCase());

		setInput('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='search'>
				<input
					type='text'
					className='search'
					name='search'
					placeholder='Search Item'
					value={input}
					onChange={(e) => {
						setInput(e.target.value);
					}}
				/>
			</label>
		</form>
	);
};

export default SearchBar;
