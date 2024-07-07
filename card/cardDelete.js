

function cardDelete(req, res){
        console.log(req);
        //const indexToRemove =   cards.indexOf(card => card.id === req.params.id);
        //cards.splice(indexToRemove, 1);
        // cards =  cards.filter(card => card.id !== req.params.id);
        res.send(`Card with id:${req.params.id} Deleted!`);

}

module.exports = cardDelete;