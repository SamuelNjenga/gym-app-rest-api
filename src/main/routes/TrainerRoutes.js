const Router = require('express');
const trainerController = require("../controllers/TrainerController");

const router = Router();

router.post('/', trainerController.createTrainer);
router.get('/', trainerController.getTrainers);
router.delete('/:id', trainerController.deleteTrainer);
router.put('/:id', trainerController.updateTrainer);

module.exports = router;