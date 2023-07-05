require('dotenv').config();

const { CONNECTION_STRING, DRIVE_API_KEY } = process.env;

const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONNECTION_STRING, {
	dialect: 'postgres',
	dialectOptions: {
		ssl: {
			rejectUnauthorized: false,
		},
	},
});

module.exports = { sequelize, key: DRIVE_API_KEY };
