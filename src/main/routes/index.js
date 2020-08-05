const Router = require('express');
const RoomRoutes = require('./RoomRoutes');

const router = Router();

router.use('/room',RoomRoutes);

module.exports = router;