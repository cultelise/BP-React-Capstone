const { DataTypes } = require('sequelize');
const { sequelize } = require('../util/database');

module.exports = {
	Garment: sequelize.define('garment', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		name: DataTypes.STRING,
		style: DataTypes.STRING,
		color: DataTypes.STRING,
	}),
};
