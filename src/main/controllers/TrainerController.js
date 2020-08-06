const trainerService = require('../services/TrainerService');

exports.createTrainer = async (req, res) => {
    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        trainerId: req.body.trainerId,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
    };
    try {
        await trainerService.createTrainer(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateTrainer = async (req, res) => {
    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        trainerId: req.body.trainerId,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
    };
    try {
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