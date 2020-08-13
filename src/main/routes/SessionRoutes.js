const Router = require('express');
const sessionController = require("../controllers/SessionController");

const router = Router();

router.post('/', sessionController.createSession);
router.get('/', sessionController.getSessions);
router.delete('/:id', sessionController.deleteSession);
router.put('/:id', sessionController.updateSession);

module.exports = router;