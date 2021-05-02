const Margarita = require('../models/margarita')

module.exports = {
    new: newMargarita,     //new is a keyword, cannot use it later for function or variable names
    create,
    index,
};

function newMargarita(req, res) {
    res.render('margaritas/new');   // fill in form
}


function create(req, res) {        //update new form data into db
    Margarita.create(req.body, function(err, margarita) {
        if(err) return res.redirect('/margaritas/new')
        res.redirect('/margaritas');        //redirect to index, changes route
    })
}

function index(req, res) {                                              // grabs all items, then sends to index
    Margarita.find({}, function(err, margaritas) {
        res.render('margaritas/index', { margaritas });    // in brackets context object taken from line above, no change to route
    });
}
