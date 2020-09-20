const db = require('../db/models/index');

exports.createUserSession = async (data) => {
    return db.UserSession.create(data);
};

exports.updateUserSession = async (data, root) => {
    return db.UserSession.update(data, root);
};

exports.getUsersSessions = async () => {
    return db.UserSession.findAll();
};

exports.deleteUserSession = async (data) => {
    return db.UserSession.destroy(data);
};