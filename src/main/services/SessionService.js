const db = require('../db/models/index');

exports.createSession = async (data) => {
    return db.Session.create(data);
};

exports.updateSession = async (data, root) => {
    return db.Session.update(data, root);
};

exports.getOneSession = async (data) => {
    return db.Session.findOne(data);
};

exports.incrementSession = async (data, root) => {
    return db.Session.increment(data, root);
};

exports.getSessions = async () => {
    return db.Session.findAll();
};

exports.deleteSession = async (data) => {
    return db.Session.destroy(data);
};