import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Auth = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const submitHandler = async (e) => {
		e.preventDefault();
		console.log(username, password);

		const res2 = await axios.post(`http://localhost:4000/`, {
			username,
			password,
		});
		console.log(res2);
	};

	useEffect(() => {
		axios.get(`http://localhost:4000/`).then((res) => console.log(res.data));
	}, []);

	return (
		<div>
			<h1>Welcome!</h1>
			<form className='form auth-form' onSubmit={submitHandler}>
				<input
					className='form-input'
					type='text'
					placeholder='Enter Username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					className='form-input'
					type='password'
					placeholder='Enter Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className='form-btn'>{'Login'}</button>
			</form>
		</div>
	);
};

export default Auth;
