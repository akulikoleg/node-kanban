
function cardUpdateByID(req, res){

        const updatedCard = req.body;
        cards = cards.map(card => card.id !== req.params.id ? card : {id: req.params.id, ...updatedCard});
        res.send('Card updated');

}

module.exports = cardUpdateByID;