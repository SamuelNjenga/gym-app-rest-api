const refreshmentService = require('../services/RefreshmentService');
const ReqValidator = require('../utils/validator');

exports.createRefreshment = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            refreshmentName: 'required|string'
        });
        if (!valid) return;
        const data = {
            refreshmentName: req.body.refreshmentName
        };

        await refreshmentService.createRefreshment(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateRefreshment = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            refreshmentName: 'required|string'
        });
        if (!valid) return;
        const data = {
            refreshmentName: req.body.refreshmentName
        };
        const refreshmentId = req.params.id;
        await refreshmentService.updateRefreshment(data, {
            where: {
                id: refreshmentId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteRefreshment = async (req, res, next) => {
    try {
        const refreshmentId = req.params.id;
        await refreshmentService.deleteRefreshment({
            where: {
                id: refreshmentId
            }
        });
        res.status(200).json({
            data: null,
            message: `Refreshment ${refreshmentId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getRefreshments = async (req, res) => {
    try {
        const refreshments = await refreshmentService.getRefreshments();
        res.status(200).json(refreshments);
    } catch (err) {
        res.json({
            message: err
        });
    }
};