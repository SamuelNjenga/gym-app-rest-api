const Router = require('express');
const RoomRoutes = require('./RoomRoutes');
const UserRoutes = require('./UserRoutes');
const DptRoutes = require('./DepartmentRoutes');
const TrainerRoutes = require('./TrainerRoutes');
const EquipmentRoutes = require('./EquipmentRoutes');
const RefreshmentRoutes = require('./RefreshmentRoutes');
const LoginRoutes = require('./LoginRoutes');
const SessionRoutes = require('./SessionRoutes')
const UserSessionRoutes = require('./UserSessionRoutes')
const ProgramRoutes = require('./ProgramRoutes')

const router = Router();

router.use('/rooms', RoomRoutes);
router.use('/users', UserRoutes);
router.use('/departments', DptRoutes);
router.use('/trainers', TrainerRoutes);
router.use('/equipments', EquipmentRoutes);
router.use('/programs', ProgramRoutes);
router.use('/refreshments', RefreshmentRoutes);
router.use('/login', LoginRoutes);
router.use('/sessions', SessionRoutes)
router.use('/userssessions', UserSessionRoutes)

module.exports = router;