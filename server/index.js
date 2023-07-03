require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./util/database');
const { SERVER_PORT } = process.env;

const { register, getAllUsers } = require('./controllers/auth');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', getAllUsers);
app.post('/', register);

sequelize.sync().then((res) => {
	console.log(res);
	app.listen(SERVER_PORT, () => {
		console.log('listening on port', SERVER_PORT);
	});
});
