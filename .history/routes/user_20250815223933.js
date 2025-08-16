const express = require('express');
const router = express.Router();




router.get('/user', (req, res) => {
    res.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'test dfd' }
    ])
})

router.post('/user', (req, res) => {
    if (req.body) {
        res.json(req.body);
    } else {
        res.status(400).json({ error: 'name is required' });
    }
});

router.patch('/user/:id', (req, res) => {
    res.json(req.params.id);
});






module.exports = router;