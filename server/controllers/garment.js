const { Garment } = require('../models/garment');
const { Tag } = require('../models/tag');

module.exports = {
	getAllGarments: async (req, res) => {
		const garments = await Garment.findAll();

		res.status(200).send(garments);
	},
	getGarment: async (req, res) => {
		const { id } = req.params;
		const garment = await Garment.findOne({
			where: { id: id },
		});

		console.log('FETCHED GARMENT:', garment);
		res.status(200).send(garment);
	},
	addGarment: async (req, res) => {
		const { name, style, brand, tags, imageId } = req.body;
		console.log('GARMENT:', req.body);

		const garment = await Garment.create(
			{
				name,
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
