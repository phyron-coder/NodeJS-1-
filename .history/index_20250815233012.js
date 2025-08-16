require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require('./db/database');

const userRouter = require('./routes/user');


app.use('/api', userRouter);








app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});