const userSessionService = require('../services/UserSessionService');
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