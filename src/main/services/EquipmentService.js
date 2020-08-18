const cloudinary = require('cloudinary').v2
const db = require('../db/models/index');

exports.createEquipment = async (data) => {
	return db.Equipment.create(data);
};

exports.updateEquipment = async (data, root) => {
	return db.Equipment.update(data, root);
};

exports.getEquipments = async () => {
	return db.Equipment.findAll();
};

exports.deleteEquipment = async (data) => {
	return db.Equipment.destroy(data);
};

exports.setEquipmentPicture = async (equipment, data) => {
	const equipmentPicture = await db.EquipmentPicture.findOne({
		where: {
			part: data.part,
			equipmentId: equipment.id
		}
	});
	if (equipmentPicture && equipmentPicture.picture) {
		//delete from cloudinary and update
		try {
			const pic = equipmentPicture.picture;
			let imageId = pic.substr(pic.lastIndexOf('/') + 1,
				pic.lastIndexOf('.') - pic.lastIndexOf('/') - 1);
			await cloudinary.v2.uploader.destroy(imageId);
		} catch (error) {
			logger.error(error);
		}
		return equipmentPicture.update(data);
	} else {
		data.employeeId = equipment.id;
		return db.EquipmentPicture.create(data);
	}
}