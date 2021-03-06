const Router = require('express');
const equipmentController = require("../controllers/EquipmentController");

const router = Router();

router.post('/', equipmentController.createEquipment);
router.get('/', equipmentController.getEquipments);
router.delete('/:id', equipmentController.deleteEquipment);
router.put('/:id', equipmentController.updateEquipment);
router.post('/:id/pictures',equipmentController.setEquipmentPicture);

module.exports = router;