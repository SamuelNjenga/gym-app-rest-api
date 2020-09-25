const Router = require('express');
const roomController = require("../controllers/RoomController");

const router = Router();

router.post('/', roomController.createRoom);
router.get('/', roomController.getRooms);
router.get('/:id', roomController.getOneRoom);
router.delete('/:id', roomController.deleteRoom);
router.put('/:id', roomController.updateRoom);

module.exports = router;