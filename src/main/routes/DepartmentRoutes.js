const Router = require('express');
const dptController = require("../controllers/DepartmentController");

const router = Router();

router.post('/', dptController.createDpt);
router.get('/', dptController.getDpts);
router.delete('/:id', dptController.deleteDpt);
router.put('/:id', dptController.updateDpt);

module.exports = router;