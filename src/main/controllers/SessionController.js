const sessionService = require('../services/SessionService');
const ReqValidator = require('../utils/validator');

exports.createSession = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            sessionStartTime: 'required',
            sessionEndTime: 'required',
            trainerId: 'required|integer',
            maxNumberOfAttendants: 'required|integer',
            roomId: 'required|integer'
        });
        if (!valid) return;
        const data = {
            sessionStartTime: req.body.sessionStartTime,
            sessionEndTime: req.body.sessionEndTime,
            trainerId: req.body.trainerId,
            maxNumberOfAttendants: req.body.maxNumberOfAttendants,
            roomId: req.body.roomId
        };
        await sessionService.createSession(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateSession = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            sessionStartTime: 'required',
            sessionEndTime: 'required',
            trainerId: 'required|integer',
            maxNumberOfAttendants: 'required|integer',
            roomId: 'required|integer'
        });
        if (!valid) return;
        const data = {
            sessionStartTime: req.body.sessionStartTime,
            sessionEndTime: req.body.sessionEndTime,
            trainerId: req.body.trainerId,
            maxNumberOfAttendants: req.body.maxNumberOfAttendants,
            roomId: req.body.roomId
        };
        const sessionId = req.params.id;
        await sessionService.updateSession(data, {
            where: {
                id: sessionId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteSession = async (req, res, next) => {
    try {
        const sessionId = req.params.id;
        await sessionService.deleteSession({
            where: {
                id: sessionId
            }
        });
        res.status(200).json({
            data: null,
            message: `Session ${sessionId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getSessions = async (req, res) => {
    try {
        const sessions = await sessionService.getSessions();
        res.status(200).json(sessions);
    } catch (err) {
        res.json({
            message: err
        });
    }
};