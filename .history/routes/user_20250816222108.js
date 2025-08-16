const express = require('express');
const router = express.Router();

const multer = require('multer');
const path = require('path');
const fs = require('fs');

const userModel = require('../model/userModel');



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // folder to store images
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });




router.get('/user', async (req, res) => {
    const dataUser = await userModel.find();
    res.json(dataUser);
})

router.get('/user/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const dataUser = await userModel.findById(id);
        res.json(dataUser);
    } catch (error) {
        console.log(error);
    }
});


// Create user with image
router.post('/user', upload.single('image'), async (req, res) => {
    try {
        const dataUser = new userModel({
            name: req.body.name,
            email: req.body.email,
            position: req.body.position,
            image: req.file ? req.file.filename : null
        });

        await dataUser.save();

        res.status(201).json({
            status: "success",
            data: dataUser
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            status: "error",
            message: error.message
        });
    }
});


// router.patch('/user/:id', upload.single('image'), async (req, res) => {
//     try {
//         const id = req.params.id;

//         // const updateUser = await userModel.findByIdAndUpdate(id, req.body);
//         // 1️⃣ Find user by ID
//         const updateUser = await userModel.findById(id);

//         if (!updateUser) {
//             return res.status(404).json({
//                 status: "error",
//                 message: "User not found"
//             })
//         }
//         // 2️⃣ Handle image updateUser
//         if (req.file) {
//             // Delete old image if exists
//             if (updateUser.image) {
//                 const oldImagePath = path.join(__dirname, '..', 'uploads', user.image);
//                 try {
//                     await fs.unlink(oldImagePath);
//                     console.log("Old image deleted:", user.image);
//                 } catch (err) {
//                     console.error("Failed to delete old image:", err);
//                 }
//             }
//             req.body.image = req.file.filename;
//         }
//         const updateuUserMain = await userModel.findByIdAndUpdate(id, req.body, { new: true })

//         res.status(200).json({
//             status: "success",
//             data: updateuUserMain
//         });


//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ status: "error", message: error.message });
//     }
// });


router.patch('/user/:id', upload.single("image"), async (req, res) => {
    try {
        const id = req.params.id;

        // 1️⃣ Find user by ID
        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).json({
                status: "error",
                message: "User not found"
            });
        }

        // 2️⃣ Handle image update
        if (req.file) {
            // Delete old image if exists
            if (user.image) {
                const oldImagePath = path.join(__dirname, '..', 'uploads', user.image);
                try {
                    fs.unlink(oldImagePath);
                    console.log("Old image deleted:", user.image);
                } catch (err) {
                    console.error("Failed to delete old image:", err);
                }
            }
            req.body.image = req.file.filename;
        }

        // 3️⃣ Update user data using Model
        const updatedUser = await userModel.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json({
            status: "success",
            data: updatedUser
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: error.message });
    }
});



router.delete('/user/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const deleteUser = await userModel.findById(id);

        if (!deleteUser) {
            return res.status(404).json({
                status: "fail",
                message: "User not found with id " + id
            });
        }

        if (deleteUser.image) {
            const imagePath = path.join(__dirname, '..', 'uploads', deleteUser.image);
            fs.unlinkSync(imagePath, (err, result) => {
                if (err) {
                    res.json({
                        status: "error",
                        message: err.message
                    });
                }
            });
        }

        await userModel.findByIdAndDelete(id);
        res.json({
            status: "Delete user successfully",
            data: deleteUser
        });

    } catch (e) {
        res.status(500).json({ status: "error", message: e.message });
    }


});






module.exports = router;