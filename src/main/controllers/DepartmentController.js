const dptService = require('../services/DepartmentService');

exports.createDpt = async (req, res) => {
    const data = {
        departmentName: req.body.departmentName,
        chairmanName: req.body.chairmanName,
        chairmanId: req.body.chairmanId,
        roomName: req.body.roomName,
        roomId: req.body.roomId
    };
    try {
        await dptService.createDepartment(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateDpt = async (req, res) => {
    const data = {
        departmentName: req.body.departmentName,
        chairmanName: req.body.chairmanName,
        chairmanId: req.body.chairmanId,
        roomName: req.body.roomName,
        roomId: req.body.roomId
    };
    try {
        const dptId = req.params.id;
        await dptService.updateDepartment(data, {
            where: {
                id: dptId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteDpt = async (req, res, next) => {
    try {
        const dptId = req.params.id;
        await dptService.deleteDepartment({
            where: {
                id: dptId
            }
        });
        res.status(200).json({
            data: null,
            message: `Department ${dptId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getDpts = async (req, res) => {
    try {
        const dpts = await dptService.getDepartments();
        res.status(200).json(dpts);
    } catch (err) {
        res.json({
            message: err
        });
    }
};