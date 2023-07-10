const { Garment } = require('../models/garment');
const { Tag } = require('../models/tag');

module.exports = {
	getAllGarments: async (req, res) => {
		const garments = await Garment.findAll();

		res.status(200).send(garments);
	},
	addGarment: async (req, res) => {
		const { type, style, brand, tags, imageId } = req.body;
		console.log('GARMENT:', req.body);

		const garment = await Garment.create(
			{
				type,
				style,
				brand,
				imageId,
				tags: tags,
			},
			{
				include: [Tag],
			}
		);

		res.status(200).send(garment);
	},
};
