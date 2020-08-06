const db = require('../db/models/index');

exports.createDepartment = async (data) => {
	return db.Department.create(data);
};

exports.updateDepartment = async (data, root) => {
	return db.Department.update(data, root);
};

exports.getDepartments = async () => {
	return db.Department.findAll();
};

exports.deleteDepartment = async (data) => {
	return db.Department.destroy(data);
};