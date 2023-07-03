require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET } = process.env;
const { User } = require('../models/user');

const createToken = (username, id) => {
	return jwt.sign({ username: username, id: id }, SECRET, {
		expiresIn: '2 days',
	});
};

module.exports = {
	login: async (req, res) => {
		try {
			const { username, password } = req.body;

			const foundUser = await User.findOne({ where: { username: username } });

			if (foundUser) {
				console.log('Found User:', foundUser);
				const isAuthenticated = bcrypt.compareSync(
					password,
					foundUser.hashedPass
				);

				if (isAuthenticated) {
					const token = createToken(
						foundUser.dataValues.username,
						foundUser.dataValues.id
					);

					console.log('Token:', token);

					const exp = Date.now() + 1000 * 60 * 60 * 48;

					res.status(200).send({
						username: foundUser.dataValues.username,
						userId: foundUser.dataValues.id,
						token: token,
						exp: exp,
					});
				} else {
					res.status(400).send('Authentication error. Cannot login.');
				}
			} else {
				res.status(400).send('User not found. Cannot login.');
			}
		} catch (error) {
			console.log('ERROR IN login');
			console.log(error);
			res.sendStatus(400);
		}
	},

	register: async (req, res) => {
		try {
			const { username, password } = req.body;

			const foundUser = await User.findOne({ where: { username: username } });

			if (foundUser) {
				res.status(400).send('User already exists.');
			}

			const salt = bcrypt.genSaltSync(10);
			const hash = bcrypt.hashSync(password, salt);

			const newUser = await User.create({
				username: username,
				hashedPass: hash,
			});

			console.log('New User:', newUser);

			const token = createToken(
				newUser.dataValues.username,
				newUser.dataValues.id
			);

			console.log('Token:', token);

			const exp = Date.now() + 1000 * 60 * 60 * 48;

			res.status(200).send({
				username: newUser.dataValues.username,
				userId: newUser.dataValues.id,
				token: token,
				exp: exp,
			});
		} catch (err) {
			console.log('ERROR IN register');
			console.log(err);
			res.sendStatus(400);
		}
	},
	getAllUsers: async (req, res) => {
		const allUsers = await User.findAll();
		console.log(allUsers);
	},
};
