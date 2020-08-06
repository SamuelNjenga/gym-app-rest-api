const Router = require('express');
const RoomRoutes = require('./RoomRoutes');
const UserRoutes = require('./UserRoutes');
const DptRoutes = require('./DepartmentRoutes');
const TrainerRoutes = require('./TrainerRoutes');

const router = Router();

router.use('/room',RoomRoutes);
router.use('/user',UserRoutes);
router.use('/department',DptRoutes);
router.use('/trainer', TrainerRoutes);

module.exports = router;