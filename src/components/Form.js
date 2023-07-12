import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
	const [images, setImages] = useState([]);
	const [name, setName] = useState('');
	const [style, setStyle] = useState('');
	const [color, setColor] = useState('');
	// const [tags, setTags] = useState([]);
	const [submitted, setSubmitted] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = async (evt) => {
		evt.preventDefault();

		setSubmitted(true);
		console.log(images);

		const imageArr1 = [];

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
			color,
			tags: [
				// ...tags,
				style.toLowerCase(),
				color.toLowerCase(),
				...name.split(' '),
			],
			photos: resArray,
		};

		const garmentRes = await axios.post(
			'http://localhost:4000/garment',
			formObj
		);

		console.log('garment response:', garmentRes);

		navigate('/');
	};

	// const handleTags = (evt) => {
	// 	let tags = evt.target.value.split(',');

	// 	console.log(tags);
	// 	console.log(tags.map((tag) => tag.trim().toLowerCase()));

	// 	setTags(tags.map((tag) => tag.trim().toLowerCase()));
	// };

	const handleImageChange = async (evt) => {
		console.log(evt.target.files);
		setImages(evt.target.files);
	};

	return (
		<form id='garment-form' onSubmit={handleSubmit}>
			<div className='input-container'>
				<label htmlFor='garment-name'>Name</label>
				<input
					className='garment-input'
					type='text'
					name='garment-name'
					value={name}
					placeholder="Levi's 511"
					onChange={(evt) => {
						setName(evt.target.value);
					}}
				/>
			</div>
			<div className='input-container'>
				<label htmlFor='garment-style'>Style</label>
				<input
					className='garment-input'
					type='text'
					name='garment-style'
					value={style}
					placeholder='Winter, Casual, etc...'
					onChange={(evt) => {
						setStyle(evt.target.value);
					}}
				/>
			</div>
			<div className='input-container'>
				<label htmlFor='garment-color'>Color</label>
				<input
					className='garment-input'
					type='text'
					name='garment-color'
					id='garment-color'
					placeholder='Dark Red'
					value={color}
					onChange={(evt) => setColor(evt.target.value)}
				/>
			</div>
			{/* <div className='input-container'>
				<label htmlFor='tags'>Tags</label>
				<input
					className='garment-input'
					type='text'
					name='tags'
					id='tags'
					placeholder='Favorite, Classic, Vintage'
					onChange={handleTags}
				/>
			</div> */}
			<div className='input-container'>
				<label htmlFor='image-upload'></label>
				<input
					className='garment-input'
					type='file'
					id='image-upload'
					name='image-upload'
					accept='image/png, image/jpeg'
					onChange={handleImageChange}
					multiple
				/>
			</div>
			<button id='garment-form-button'>Upload</button>
		</form>
	);
};

export default Form;
