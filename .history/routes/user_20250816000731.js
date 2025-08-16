const express = require('express');
const router = express.Router();

const userModel = require('../model/userModel');



router.get('/user', async (req, res) => {
    // const getuser = await 
})

router.get('/user/:id', (req, res) => {
    res.json("Get user by id " + req.params.id);
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