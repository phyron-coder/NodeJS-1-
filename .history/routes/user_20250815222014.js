const express = require('express');
const router = express.Router();
const app = express();





router.get('/test', (req, res) => {
    res.send('Hello user!');
})

module.exports = router;