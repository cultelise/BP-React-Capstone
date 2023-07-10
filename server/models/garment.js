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
		type: DataTypes.STRING,
		style: DataTypes.STRING,
		brand: DataTypes.STRING,
		imageId: DataTypes.STRING,
	}),
};
