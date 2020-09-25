const roomService = require('../services/RoomService');
const ReqValidator = require('../utils/validator');

exports.createRoom = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            roomName: 'required|string',
            roomSize: 'required|integer',
        });
        if (!valid) return;
        const data = {
            roomName: req.body.roomName,
            roomSize: req.body.roomSize
        };

        await roomService.createRoom(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateRoom = async (req, res) => {

    try {
    const valid = await ReqValidator.validate(req, res, {
        roomName: 'required|string',
        roomSize: 'required|integer',
    });
    if (!valid) return;
    const data = {
        roomName: req.body.roomName,
        roomSize: req.body.roomSize
    };
    
        const roomId = req.params.id;
        await roomService.updateRoom(data, {
            where: {
                id: roomId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteRoom = async (req, res, next) => {
    try {
        const roomId = req.params.id;
        await roomService.deleteRoom({
            where: {
                id: roomId
            }
        });
        res.status(200).json({
            data: null,
            message: `Room ${roomId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getRooms = async (req, res) => {
    try {
        const rooms = await roomService.getRooms();
        res.status(200).json(rooms);
    } catch (err) {
        res.json({
            message: err
        });
    }
};

exports.getOneRoom = async (req, res) => {
    try {
        const roomId = req.params.id
        console.log(roomId);
        const room = await roomService.getRoom({where: {id:roomId}})
        console.log(room.id);
        res.status(200).json(room);
    } catch (err) {
        res.json({
            message: err
        });
    }
};