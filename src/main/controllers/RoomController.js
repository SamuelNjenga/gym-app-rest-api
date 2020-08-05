const roomService = require('../services/RoomService');

exports.createRoom = async (req, res) => {
    const data = {
        roomName: req.body.roomName,
        roomSize: req.body.roomSize
    };
    try {
        await roomService.createRoom(data)
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};