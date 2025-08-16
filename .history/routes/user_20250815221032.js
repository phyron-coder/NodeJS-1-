const express = require('express');
const router = express.Router();

const app = express();

const userRouter = require('../routes/user');



router.get('/', (req, res) => {
    res.send('Hello user!');
})

module.exports = router;