module.exports = {
	test: (req, res) => {
		console.log('test');
		res.status(200).send('test successful');
	},
	test2: (req, res) => {
		console.log(req.body);
		res.status(200).send(req.body);
	},
};
