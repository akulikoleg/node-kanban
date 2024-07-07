const mongoose = require('mongoose');



function dbConnection(){

    mongoose.connect('mongodb://127.0.0.1:27017/kanban')
        .then(() => console.log('Connected!'))
        .catch((err) => console.log(err));

}

module.exports = dbConnection;
