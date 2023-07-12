const { Garment } = require('../models/garment');
const { Photo } = require('../models/photo');
const { Tag } = require('../models/tag');

module.exports = {
	getAllGarments: async (req, res) => {
		const garments = await Garment.findAll({
			include: [Tag, Photo],
		});

		res.status(200).send(garments);
	},
	getGarment: async (req, res) => {
		const { id } = req.params;
		const garment = await Garment.findOne({
			where: { id: id },
			include: [Tag, Photo],
		});

		console.log('FETCHED GARMENT:', garment);
		res.status(200).send(garment);
	},
	addGarment: async (req, res) => {
		const { name, style, brand, tags, photos } = req.body;
		console.log('GARMENT:', req.body);

		const garment = await Garment.create(
			{
				name,
				style,
				brand,
				tags: tags.map((tag) => {
					return { name: tag };
				}),
				photos: photos.map((photo) => {
					return { drive_id: photo };
				}),
			},
			{
				include: [Tag, Photo],
			}
		);

		res.status(200).send(garment);
	},
};
