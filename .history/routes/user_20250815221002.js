const express = require('express');
const router = express.Router();

const userRouter = require('../routes/user');



userRouter

router.get('/', (req, res) => {
    res.send('Hello user!');
})

module.exports = router;