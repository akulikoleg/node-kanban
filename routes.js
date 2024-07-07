let cards = [
    {id: '1', name: "John", status: 'todo', priority: 1},
    {id: '2', name: "SAMER", status: 'progress', priority: 3},
    {id: '4', name: "Sdfgr AMER", status: 'review', priority: 2}
];

function routes(app){


    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    app.delete('/card/:id', (req, res) => {
        console.log(req);
        //const indexToRemove =   cards.indexOf(card => card.id === req.params.id);
        //cards.splice(indexToRemove, 1);
        cards =  cards.filter(card => card.id !== req.params.id);
        res.send(`Card with id:${req.params.id} Deleted!`);
    })

    app.get('/card', (req, res) => {
        res.send(cards);
    })

    app.post('/card', (req, res) => {
        const newcard = req.body;
        let id = Math.trunc(Math.random()*100).toString();
        cards.push({...newcard, "id": id});
        res.send('Card created')
    })

    app.patch('/card/:id', (req, res) => {
        const updatedCard = req.body;
        cards = cards.map(card => card.id !== req.params.id ? card : {id: req.params.id, ...updatedCard});
        res.send('Card updated');
    })
}

module.exports = routes;