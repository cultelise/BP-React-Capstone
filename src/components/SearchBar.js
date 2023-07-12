import React, { useState } from 'react';

const SearchBar = ({ searchInput, setSearchInput }) => {
	const [input, setInput] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();

		setSearchInput(input.toLowerCase());
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='search'>
				<input
					type='text'
					id='search'
					name='search'
					placeholder='Search'
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
