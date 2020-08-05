const Router = require('express');
const roomController = require("../controllers/RoomController");

const router = Router();

router.post('/', roomController.createRoom);

module.exports = router;