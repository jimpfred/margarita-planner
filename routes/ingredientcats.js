// for all ingredient routes
// router maps http request to controller

const express = require('express');
const router = express.Router();
const ingredientCatsCtrl = require('../controllers/ingredientcats');

// define controller routes

router.get('/', ingredientCatsCtrl.index)
router.get('/new', ingredientCatsCtrl.new); 
router.post('/', ingredientCatsCtrl.create);
router.get('/:id/edit', ingredientCatsCtrl.edit);
router.put('/:id', ingredientCatsCtrl.update);
router.delete('/:id', ingredientCatsCtrl.delete);

module.exports = router;