const Router = require('express');
const RoomRoutes = require('./RoomRoutes');
const UserRoutes = require('./UserRoutes');

const router = Router();

router.use('/room',RoomRoutes);
router.use('/user',UserRoutes);

module.exports = router;