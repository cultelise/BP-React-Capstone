import axios from 'axios';
import React, { useState } from 'react';

const Form = () => {
	const [image, setImage] = useState('');
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = async (evt) => {
		evt.preventDefault();

		setSubmitted(true);
		console.log(image);

		const formData = new FormData();

		formData.append('file', image);

		const response = await axios.post('http://localhost:4000/test', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});

		console.log('RESPONSE:', response);

		console.log(URL.createObjectURL(image));
	};

	const handleChange = (evt) => {
		setImage(evt.target.files[0]);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='image-upload'></label>
			<input
				// value={image}
				type='file'
				id='image-upload'
				name='image-upload'
				accept='image/png, image/jpeg'
				onChange={handleChange}
			/>
			<button>Upload</button>
			{/* {image && submitted ? (
				<img src={URL.createObjectURL(image)} alt='' />
			) : undefined} */}
		</form>
	);
};

export default Form;
