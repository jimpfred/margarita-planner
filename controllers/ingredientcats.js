const Ingredientcat = require('../models/ingredientcat')

module.exports = {
    new: newIngredientCat,     //new is a keyword, cannot use it later for function or variable names
    create,
    index,
    edit,
    delete: deleteIngredientCat,
    update,
};

function newIngredientCat(req, res) {
    res.render('ingredientcats/new');   // fill in form
}


function create(req, res) {        //update new form data into db
    Ingredientcat.create(req.body, function(err, ingredientCat) {
        if(err) return res.redirect('/ingredientcats/new')
        res.redirect('/ingredientcats');        //redirect to index, changes route
    })
}

function index(req, res) {                                              // grabs all items, then sends to index
    Ingredientcat.find({}, function(err, ingredientCats) {
        res.render('ingredientcats/index', { ingredientCats });    // in brackets context object taken from line above, no change to route
    });
}

function edit(req, res) {
    Ingredientcat.findById(req.params.id, function(err, ingredientCat) {
        res.render('ingredientcats/edit', { ingredientCat })
    })
}

function update(req, res) {
    Ingredientcat.findByIdAndUpdate(req.params.id, {name: req.body.name}, function(err) {
        res.redirect('/ingredientcats')       //redirect to index, changes route
    })
}

function deleteIngredientCat(req, res) {
    Ingredientcat.findByIdAndDelete(req.params.id, function(err) {
        res.redirect('/ingredientcats');        //redirect to index, changes route
    })
}
