const mongoose = require('mongoose');


// const MongoClient = require('mongodb').MongoClient;

mongoose.connect('mongodb+srv://phyron:phyron100203@cluster0.zcfkbeb.mongodb.net/API-Born?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Database connected');
    })
    .catch(err => {
        console.error(err);
    });

module.exports = mongoose

