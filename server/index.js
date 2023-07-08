require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./util/database');
const { SERVER_PORT } = process.env;
const multer = require('multer');

const { register, getAllUsers } = require('./controllers/auth');
const { test, test2, uploadImage } = require('./controllers/test');

const upload = multer({ dest: 'temp/' });

const app = express();

app.use(express.json());
app.use(cors());

app.get('/test', test);
app.get('/test2', test2);
app.post('/test', upload.single('file'), uploadImage);
app.get('/', getAllUsers);
app.post('/', register);

sequelize.sync().then((res) => {
	console.log(res);
	app.listen(SERVER_PORT, () => {
		console.log('listening on port', SERVER_PORT);
	});
});
