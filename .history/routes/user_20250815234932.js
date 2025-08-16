const express = require('express');
const router = express.Router();




router.get('/user', async (req, res) => {
    const getuser = await 
})

router.get('/user/:id', (req, res) => {
    res.json("Get user by id " + req.params.id);
});

router.post('/user', (req, res) => {
    if (req.body) {
        res.json(req.body);
    } else {
        res.status(400).json({ error: 'name is required' });
    }
});

router.patch('/user/:id', (req, res) => {
    res.json("Your current id is " + req.params.id);
});

router.delete('/user/:id', (req, res) => {
    res.json("Deleted id is " + req.params.id);
});






module.exports = router;