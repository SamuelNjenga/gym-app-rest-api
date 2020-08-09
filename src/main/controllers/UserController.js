const userService = require('../services/UserService');
const ReqValidator = require('../utils/validator')

exports.createUser = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            firstName: 'required|string',
            lastName: 'required|string',
            email: 'required|integer',
            userName: 'required|string',
            roomId: 'required|integer',
            password: 'required|string',
            gender: 'required|string',
            role: 'required|string',
            phoneNumber: 'required|string',
            idNumber: 'required|string'
        })
        if (!valid) return
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            userName: req.body.userName,
            password: req.body.password,
            gender: req.body.gender,
            role: req.body.role,
            phoneNumber: req.body.phoneNumber,
            idNumber: req.body.idNumber
        };

        await userService.createUser(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            firstName: 'required|string',
            lastName: 'required|string',
            email: 'required|integer',
            userName: 'required|string',
            roomId: 'required|integer',
            password: 'required|string',
            gender: 'required|string',
            role: 'required|string',
            phoneNumber: 'required|string',
            idNumber: 'required|string'
        })
        if (!valid) return
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            userName: req.body.userName,
            password: req.body.password,
            gender: req.body.gender,
            role: req.body.role,
            phoneNumber: req.body.phoneNumber,
            idNumber: req.body.idNumber
        };

        const userId = req.params.id;
        await userService.updateUser(data, {
            where: {
                id: userId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        await userService.deleteUser({
            where: {
                id: userId
            }
        });
        res.status(200).json({
            data: null,
            message: `User ${userId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (err) {
        res.json({
            message: err
        });
    }
};