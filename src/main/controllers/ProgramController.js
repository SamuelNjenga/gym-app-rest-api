const programService = require('../services/ProgramService');
const ReqValidator = require('../utils/validator');
const {
    cloudinary
} = require('../utils/cloudinary')

exports.createProgram = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            programTitle: 'required|string',
            programDescription: 'required|string',
            moreDescription: 'required|string'
        });
        if (!valid) return;
        const data = {
            programTitle: req.body.programTitle,
            programDescription: req.body.programDescription,
            moreDescription: req.body.moreDescription
        };

        await programService.createProgram(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateProgram = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            programTitle: 'required|string',
            programDescription: 'required|string',
            moreDescription: 'required|string'
        });
        if (!valid) return;
        const data = {
            programTitle: req.body.programTitle,
            programDescription: req.body.programDescription,
            moreDescription: req.body.moreDescription
        };
        const programId = req.params.id;
        await programService.updateProgram(data, {
            where: {
                id: programId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteProgram = async (req, res, next) => {
    try {
        const programId = req.params.id;
        await programService.deleteProgram({
            where: {
                id: programId
            }
        });
        res.status(200).json({
            data: null,
            message: `Program ${programId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getPrograms = async (req, res) => {
    try {
        const programs = await programService.getPrograms();
        res.status(200).json(programs);
    } catch (err) {
        res.json({
            message: err
        });
    }
};

exports.setProgramPicture = async (req, res) => {
    try {
        const fileStr = req.body.data
        const id = req.params.id
        console.log(id);
        const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
            folder: 'gym-app'
        })
        console.log(uploadedResponse);

        const data = {
            programId: id,
            picture: uploadedResponse.public_id

        };
        await programService.createProgramPicture(data)
        console.log(data);
        res.status(201).json(data);
    } catch (error) {
        console.error(error)
        res.status(500).json({
            err: 'Something went wrong'
        })
    }
};

