const equipmentService = require('../services/EquipmentService');

exports.createEquipment = async (req, res) => {
    const data = {
        itemName: req.body.itemName,
        itemQuality:req.body.itemQuality,
        itemDescription: req.body.itemDescription,
        itemQuantity: req.body.itemQuantity
    };
    try {
        await equipmentService.createEquipment(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateEquipment = async (req, res) => {
    const data = {
        itemName: req.body.itemName,
        itemQuality:req.body.itemQuality,
        itemDescription: req.body.itemDescription,
        itemQuantity: req.body.itemQuantity
    };
    try {
        const equipmentId = req.params.id;
        await equipmentService.updateEquipment(data,{
            where: {
                id: equipmentId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteEquipment = async (req, res, next) => {
    try {
        const equipmentId = req.params.id;
        await equipmentService.deleteEquipment({
            where: {
                id: equipmentId
            }
        });
        res.status(200).json({
            data: null,
            message: `Equipment ${equipmentId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getEquipments = async (req, res) => {
    try {
        const equipments = await equipmentService.getEquipments();
        res.status(200).json(equipments);
    } catch (err) {
        res.json({
            message: err
        });
    }
};