const roomService = require('../services/RoomService');

exports.createRoom = async (req, res) => {
    const data = {
        roomName: req.body.roomName,
        roomSize: req.body.roomSize
    };
    try {
        await roomService.createRoom(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateRoom = async (req, res) => {
    const data = {
        roomName: req.body.roomName,
        roomSize: req.body.roomSize
    };
    try {
        const roomId = req.params.id;
        await roomService.updateRoom(data,{
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