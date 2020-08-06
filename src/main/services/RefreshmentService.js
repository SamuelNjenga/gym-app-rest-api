const db = require('../db/models/index');

exports.createRefreshment = async (data) => {
    return db.Refreshment.create(data);
};

exports.updateRefreshment = async (data, root) => {
    return db.Refreshment.update(data, root);
};

exports.getRefreshments = async () => {
    return db.Refreshment.findAll();
};

exports.deleteRefreshment = async (data) => {
    return db.Refreshment.destroy(data);
};