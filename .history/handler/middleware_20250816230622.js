const multer = require('multer');
const path = require('path');
// const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // folder to store images
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const Id = (req, res, next) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).json({
            status: "error",
            message: "Id is required"
        });
    }
    next();
}

const upload = multer({ storage });

module.exports = { upload, Id };