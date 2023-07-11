import axios from 'axios';
import React, { useState } from 'react';

const Form = ({ formData, setFormData }) => {
	const [image, setImage] = useState('');
	const [name, setName] = useState('');
	const [style, setStyle] = useState('');
	const [brand, setBrand] = useState('');
	const [tags, setTags] = useState([]);
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = async (evt) => {
		evt.preventDefault();

		setSubmitted(true);
		console.log(image);

		const imageData = new FormData();

		imageData.append('file', image);

		const imageRes = await axios.post('http://localhost:4000/test', imageData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});

		const formObj = {
			name,
			style,
			brand,
			tags,
			imageId: imageRes.data.id,
		};

		setFormData(formObj);

		const garmentRes = await axios.post(
			'http://localhost:4000/garment',
			formObj
		);

		console.log('garment response:', garmentRes);

		console.log(URL.createObjectURL(image));
	};

	const handleTags = (evt) => {
		let tags = evt.target.value.split(',');

		console.log(tags);
		console.log(tags.map((tag) => tag.trim().toLowerCase()));

		setTags(tags.map((tag) => tag.trim().toLowerCase()));
	};

	const handleImageChange = (evt) => {
		setImage(evt.target.files[0]);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='garment-name'>Name</label>
			<input
				type='text'
				name='garment-name'
				value={name}
				placeholder='Enter garment name'
				onChange={(evt) => {
					setName(evt.target.value);
				}}
			/>
			<input
				type='text'
				name='garment-style'
				value={style}
				placeholder='Enter garment style'
				onChange={(evt) => {
					setStyle(evt.target.value);
				}}
			/>
			<label htmlFor='brand'>Brand</label>
			<input
				type='text'
				name='brand'
				placeholder='Enter brand'
				value={brand}
				onChange={(evt) => setBrand(evt.target.value)}
			/>
			<label htmlFor='tags'>Tags</label>
			<input
				type='text'
				name='tags'
				onChange={handleTags}
				placeholder='Enter tags separated by ","'
			/>
			<label htmlFor='image-upload'></label>
			<input
				// value={image}
				type='file'
				id='image-upload'
				name='image-upload'
				accept='image/png, image/jpeg'
				onChange={handleImageChange}
			/>
			<button>Upload</button>
			{/* {image && submitted ? (
				<img src={URL.createObjectURL(image)} alt='' />
			) : undefined} */}
		</form>
	);
};

export default Form;
