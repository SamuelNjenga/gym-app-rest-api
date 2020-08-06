const Router = require('express');
const refreshmentController = require("../controllers/RefreshmentController");

const router = Router();

router.post('/', refreshmentController.createRefreshment);
router.get('/', refreshmentController.getRefreshments);
router.delete('/:id', refreshmentController.deleteRefreshment);
router.put('/:id', refreshmentController.updateRefreshment);

module.exports = router;