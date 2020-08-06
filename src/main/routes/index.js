const Router = require('express');
const RoomRoutes = require('./RoomRoutes');
const UserRoutes = require('./UserRoutes');
const DptRoutes = require('./DepartmentRoutes');

const router = Router();

router.use('/room',RoomRoutes);
router.use('/user',UserRoutes);
router.use('/department',DptRoutes);

module.exports = router;