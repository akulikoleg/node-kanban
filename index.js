const express = require('express');
const routes = require("./routes");
const bParser = require("./bodyParser");
const dbConnection = require("./dbConnection");

const app = express();
const PORT = process.env.PORT || 5000;

dbConnection();
bParser(app);
routes(app);


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})

