const express = require('express');
const app = express();
app.use(express.json());
const router = express.Router();




router.get('/user', (req, res) => {
    res.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'test dfd' }
    ])
})

router.post('/user', (req, res) => {
    if (req.body && req.body.name) {
        res.json({ name: req.body.name });
    } else {
        res.status(400).json({ error: 'name is required' });
    }
});



module.exports = router;