const Router = require('express');
const programController = require("../controllers/programController");

const router = Router();

router.post('/', programController.createProgram);
router.get('/', programController.getPrograms);
router.delete('/:id', programController.deleteProgram);
router.put('/:id', programController.updateProgram);
router.post('/:id/pictures',programController.setProgramPicture);

module.exports = router;