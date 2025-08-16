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

router.patch('/user/:id', (req, res) => {
    res.json("Your current id is " + req.params.id);
});

router.delete('/user/:id', (req, res) => {
    res.json("Deleted id is " + req.params.id);
});






module.exports = router;