const Router = require('express');
const roomController = require("../controllers/RoomController");

const router = Router();

router.post('/', roomController.createRoom);
router.get('/', roomController.getRooms);
router.delete('/:id',roomController.deleteRoom);

module.exports = router;