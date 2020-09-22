const cloudinary = require('cloudinary').v2
const db = require('../db/models/index');

exports.createProgram = async (data) => {
	return db.Program.create(data);
};

exports.updateProgram = async (data, root) => {
	return db.Program.update(data, root);
};

exports.getPrograms = async () => {
	return db.Program.findAll({ include: db.ProgramPicture });
};

exports.deleteProgram = async (data) => {
	return db.Program.destroy(data);
};

exports.createProgramPicture = async (data) => {
	return db.ProgramPicture.create(data);
};