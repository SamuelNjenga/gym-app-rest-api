const Router = require('express');
const equipmentController = require("../controllers/EquipmentController");
const Upload = require("../middlewares/Upload");

const router = Router();

router.post('/', equipmentController.createEquipment);
router.get('/', equipmentController.getEquipments);
router.delete('/:id', equipmentController.deleteEquipment);
router.put('/:id', equipmentController.updateEquipment);
router.patch('/:equipmentId/pictures',Upload.single('image'), equipmentController.setEquipmentPicture);

module.exports = router;