const db = require('../db/models/index');

exports.createTrainer = async (data) => {
	return db.Trainer.create(data);
};

exports.updateTrainer = async (data, root) => {
	return db.Trainer.update(data, root);
};

exports.getTrainers = async () => {
	return db.Trainer.findAll();
};

exports.deleteTrainer = async (data) => {
	return db.Trainer.destroy(data);
};