const Router = require('express');
const userSessionController = require("../controllers/UserSessionController");

const router = Router();

router.post('/', userSessionController.createUserSession);
router.get('/', userSessionController.getUsersSessions);
router.delete('/:id', userSessionController.deleteUserSession);
router.put('/:id', userSessionController.updateUserSession);

module.exports = router;