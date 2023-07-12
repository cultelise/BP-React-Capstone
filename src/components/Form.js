import axios from 'axios';
import React, { useState } from 'react';

const Form = ({ formData, setFormData }) => {
	const [images, setImages] = useState([]);
	const [name, setName] = useState('');
	const [style, setStyle] = useState('');
	const [brand, setBrand] = useState('');
	const [tags, setTags] = useState([]);
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = async (evt) => {
		evt.preventDefault();

		setSubmitted(true);
		console.log(images);

		const imageArr1 = [];
		// const imageArr2 = []

		for (let i = 0; i < images.length; i++) {
			console.log(images[i]);
			imageArr1.push(images[i]);
		}

		console.log(imageArr1);

		const resArray = await Promise.all(
			imageArr1.map(async (image) => {
				const imageData = new FormData();

				imageData.append('file', image);

				const imageRes = await axios.post(
					'http://localhost:4000/test',
					imageData,
					{
						headers: {
							'Content-Type': 'multipart/form-data',
						},
					}
				);
				return imageRes.data.id;
			})
		);

		console.log('RES ARRAY:', resArray);

		const formObj = {
			name,
			style,
			brand,
			tags: [
				...tags,
				style.toLowerCase(),
				brand.toLowerCase(),
				...name.split(' '),
			],
			photos: resArray,
		};

		setFormData(formObj);

		const garmentRes = await axios.post(
			'http://localhost:4000/garment',
			formObj
		);

		console.log('garment response:', garmentRes);
	};

	const handleTags = (evt) => {
		let tags = evt.target.value.split(',');

		console.log(tags);
		console.log(tags.map((tag) => tag.trim().toLowerCase()));

		setTags(tags.map((tag) => tag.trim().toLowerCase()));
	};

	const handleImageChange = async (evt) => {
		console.log(evt.target.files);
		setImages(evt.target.files);
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
				multiple
			/>
			<button>Upload</button>
			{/* {image && submitted ? (
				<img src={URL.createObjectURL(image)} alt='' />
			) : undefined} */}
		</form>
	);
};

export default Form;
