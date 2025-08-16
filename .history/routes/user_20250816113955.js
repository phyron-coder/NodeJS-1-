const express = require('express');
const router = express.Router();

const userModel = require('../model/userModel');



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

router.post('/user', async (req, res) => {
    try {
        const dataUser = await userModel.create(req.body);
        res.json({
            status: "success",
            data: dataUser
        });
    } catch (error) {
        console.log(error);
    }
});

router.patch('/user/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateUser = await userModel.findByIdAndUpdate(id, req.body);
        res.json({
            status: "success",
            data: updateUser
        });
    } catch (error) {
        console.log(error);
    }
});

router.delete('/user/:id', async (req, res) => {
    const id = req.params.id;
    const deletUser = await userModel.findByIdAndDelete(id);
    res.json({
        status: "success",
        data: deletUser
    });
});






module.exports = router;