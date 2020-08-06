const Router = require('express');
const RoomRoutes = require('./RoomRoutes');
const UserRoutes = require('./UserRoutes');
const DptRoutes = require('./DepartmentRoutes');
const TrainerRoutes = require('./TrainerRoutes');
const EquipmentRoutes = require('./EquipmentRoutes');

const router = Router();

router.use('/room',RoomRoutes);
router.use('/user',UserRoutes);
router.use('/department',DptRoutes);
router.use('/trainer', TrainerRoutes);
router.use('/equipment', EquipmentRoutes);

module.exports = router;