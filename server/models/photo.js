const { DataTypes } = require('sequelize');
const { sequelize } = require('../util/database');

module.exports = {
	Photo: sequelize.define('photo', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		drive_id: DataTypes.STRING,
	}),
};
