const { Tag } = require('../models/tag');

module.exports = {
	getTags: async (req, res) => {
		const tags = Tag.findAll();
		res.status(200).send(tags);
	},
};
