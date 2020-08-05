const db = require('../db/models/index');

exports.createRoom = async (data) => {
	return db.Room.create(data);
};
