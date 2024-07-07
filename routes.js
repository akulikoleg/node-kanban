const cardCreate = require("./card/cardCreate");
const cardDelete = require("./card/cardDelete");
const cardGetAll = require("./card/cardGetAll");
const cardUpdateByID = require("./card/cardUpdateByID");


let cards = [
    {id: '1', name: "John", status: 'todo', priority: 1},
    {id: '2', name: "SAMER", status: 'progress', priority: 3},
    {id: '4', name: "Sdfgr AMER", status: 'review', priority: 2}
];

function routes(app){

    app.get('/', (req, res) => {
        res.send('Hello World!')
    })
    app.delete('/card/:id', cardDelete)
    app.get('/card', cardGetAll)
    app.post('/card', cardCreate)
    app.patch('/card/:id', cardUpdateByID)
}

module.exports = routes;