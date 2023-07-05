import React, { useState } from 'react';

const SearchBar = () => {
	const [input, setInput] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(input);

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
