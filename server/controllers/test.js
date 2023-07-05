const fs = require('fs');
const { key } = require('../util/database');
const { google } = require('googleapis');

const credentials = require('../../service-account-key.json');

const scopes = ['https://www.googleapis.com/auth/drive'];

// Create an OAuth2 client
const auth = new google.auth.GoogleAuth({
	credentials,
	scopes,
});

const drive = google.drive({
	version: 'v3',
	auth,
});

module.exports = {
	test: async (req, res) => {
		const params = {
			fileId: '1Ew4r_hnEC3E3rRQMqElLocDtA9dEW63b',
		};
		const response = await drive.files.get(params);

		console.log('RESPONSE1', response.data);
		res.status(200).send(response.data);
	},
	test2: async (req, res) => {
		const folderId = '1MZMHH7bTrghUDDDBtWpwhqAG-3Wy_Fzu';

		const params = {
			q: `'${folderId}' in parents and mimeType='image/jpeg'`,
		};

		const response = await drive.files.list(params);

		console.log('RESPONSE1', response.data);
		res.status(200).send(response.data);
	},
	uploadImage: async (req, res) => {
		const folderId = '1MZMHH7bTrghUDDDBtWpwhqAG-3Wy_Fzu'; // ID of the folder where you want to upload the image
		const imageFilePath =
			'/Users/elise/Desktop/Screenshot 2023-06-09 at 5.02.55 PM.png'; // Path to the image file on your local system

		const fileMetadata = {
			name: 'my_image.jpg', // Name of the file in Google Drive
			parents: [folderId], // ID of the folder to upload the image into
		};

		const media = {
			mimeType: 'image/jpeg',
			body: fs.createReadStream(imageFilePath),
		};

		try {
			const response = await drive.files.create({
				resource: fileMetadata,
				media: media,
				fields: 'id',
			});

			console.log('Image uploaded successfully. File ID:', response.data.id);
			console.log('Response Data:', response.data);
			res.status(200).send(response.data);
		} catch (error) {
			console.error('Error uploading image:', error);
			res.status(500).send('Error uploading image');
		}
	},
};
