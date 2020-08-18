const Cloudinary = require('cloudinary').v2;
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

const storage = cloudinaryStorage({
    cloudinary: Cloudinary,
    folder: 'gym-app',
});

module.exports = multer({ storage });
