require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require('./db/database');

const userRouter = require('./routes/user');


app.use('/api', userRouter);






const port = process.env.PORT || 3000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() => {
    console.log('Database connected');
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}).catch(err => {
    console.log(err);
});