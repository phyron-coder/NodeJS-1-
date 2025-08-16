const express = require('express');
const router = express.Router();



router.get('/user', (req, res) => {
    res.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'test dfd' }
    ])
})





module.exports = router;