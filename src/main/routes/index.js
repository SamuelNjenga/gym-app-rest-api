const Router = require('express');
const RoomRoutes = require('./RoomRoutes');
const UserRoutes = require('./UserRoutes');
const DptRoutes = require('./DepartmentRoutes');
const TrainerRoutes = require('./TrainerRoutes');
const EquipmentRoutes = require('./EquipmentRoutes');
const RefreshmentRoutes = require('./RefreshmentRoutes');

const router = Router();

router.use('/room',RoomRoutes);
router.use('/user',UserRoutes);
router.use('/department',DptRoutes);
router.use('/trainer', TrainerRoutes);
router.use('/equipment', EquipmentRoutes);
router.use('/refreshment',RefreshmentRoutes);

module.exports = router;