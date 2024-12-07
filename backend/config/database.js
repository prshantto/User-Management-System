const mongoose = require('mongoose');

const dbconnection = mongoose.connect('mongodb+srv://prashant:8851826868@database.pzff2.mongodb.net/userdata').then(()=>{
    console.log('connected to database!')
});

module.exports = dbconnection;

