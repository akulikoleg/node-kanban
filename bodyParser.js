const bodyParser = require("body-parser");

function bParser(app){
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

}


module.exports = bParser;