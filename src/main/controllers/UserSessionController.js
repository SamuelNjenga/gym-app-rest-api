const userSessionService = require('../services/UserSessionService');
const sessionService = require('../services/SessionService');
const ReqValidator = require('../utils/validator');

exports.createUserSession = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            userId: 'required|integer',
            sessionId: 'required|integer',
        });
        if (!valid) return;
        const data = {
            userId: req.body.userId,
            sessionId: req.body.sessionId
        };
        const sessionId = data.sessionId
        const allData = await sessionService.getOneSession({where:{id:sessionId}})
        const maxSoFar = allData.maxNumberOfAttendants
        const noOfAttendantsSoFar = allData.numberOfAttendantsSoFar
        if(noOfAttendantsSoFar + 1 > maxSoFar) {
         return res.status(200).json('Max Number has been reached');
        }
        await sessionService.incrementSession({numberOfAttendantsSoFar : 1}, {
            where: {
                id: sessionId
            }
        });
        await userSessionService.createUserSession(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateUserSession = async (req, res) => {

    try {
    const valid = await ReqValidator.validate(req, res, {
        userId: 'required|integer',
        sessionId: 'required|integer',
    });
    if (!valid) return;
    const data = {
        userId: req.body.userId,
        sessionId: req.body.sessionId
    };
    
        const userSessionId = req.params.id;
        await userSessionService.updateUserSession(data, {
            where: {
                id: userSessionId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteUserSession = async (req, res, next) => {
    try {
        const userSessionId = req.params.id;
        await userSessionService.deleteUserSession({
            where: {
                id: userSessionId
            }
        });
        res.status(200).json({
            data: null,
            message: `UserSession ${userSessionId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getUsersSessions = async (req, res) => {
    try {
        const usersSessions = await userSessionService.getUsersSessions()
        res.status(200).json(usersSessions);
    } catch (err) {
        res.json({
            message: err
        });
    }
};