const trainerService = require('../services/TrainerService');
const ReqValidator = require('../utils/validator');

exports.createTrainer = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            firstName: 'required|string',
            firstName: 'required|string',
            trainerId: 'required|integer',
            departmentId: 'required|integer',
            email: 'required|string|email',
            phoneNumber: 'required|string'
        });
        if (!valid) return;
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            trainerId: req.body.trainerId,
            departmentId: req.body.departmentId,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber
        };

        await trainerService.createTrainer(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateTrainer = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            firstName: 'required|string',
            firstName: 'required|string',
            trainerId: 'required|integer',
            departmentId: 'required|integer',
            email: 'required|string|email',
            phoneNumber: 'required|string'
        });
        if (!valid) return;
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            trainerId: req.body.trainerId,
            departmentId: req.body.departmentId,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber
        };
        const trainerId = req.params.id;
        await trainerService.updateTrainer(data, {
            where: {
                id: trainerId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteTrainer = async (req, res, next) => {
    try {
        const trainerId = req.params.id;
        await trainerService.deleteTrainer({
            where: {
                id: trainerId
            }
        });
        res.status(200).json({
            data: null,
            message: `Trainer ${trainerId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getTrainers = async (req, res) => {
    try {
        const trainers = await trainerService.getTrainers();
        res.status(200).json(trainers);
    } catch (err) {
        res.json({
            message: err
        });
    }
};