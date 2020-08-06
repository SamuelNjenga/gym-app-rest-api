const userService = require('../services/UserService');

exports.createUser = async (req, res) => {
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
    try {
        await userService.createUser(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateUser = async (req, res) => {
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
    try {
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