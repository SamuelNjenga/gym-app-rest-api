const cloudinary = require('cloudinary').v2
const db = require('../db/models/index');

exports.createEquipment = async (data) => {
	return db.Equipment.create(data);
};

exports.updateEquipment = async (data, root) => {
	return db.Equipment.update(data, root);
};

exports.getEquipments = async () => {
	return db.Equipment.findAll({ include: db.EquipmentPicture });
};

exports.deleteEquipment = async (data) => {
	return db.Equipment.destroy(data);
};

exports.createEquipmentPicture = async (data) => {
	return db.EquipmentPicture.create(data);
};

// exports.setEquipmentPicture = async (equipment) => {
// 	const equipmentPicture = await db.EquipmentPicture.findOne({
// 		where: {
// 			equipmentId: equipment.id
// 		}
// 	});
// 	if (equipmentPicture && equipmentPicture.picture) {
// 		//delete from cloudinary and update
// 		try {
// 			const pic = equipmentPicture.picture;
// 			let imageId = pic.substr(pic.lastIndexOf('/') + 1,
// 				pic.lastIndexOf('.') - pic.lastIndexOf('/') - 1);
// 			await cloudinary.v2.uploader.destroy(imageId);
// 		} catch (error) {
// 			logger.error(error);
// 		}
// 		return equipmentPicture.update(data);
// 	} else {
// 		data.equipmentId = equipment.id;
// 		return db.EquipmentPicture.create(data);
// 	}
// }
