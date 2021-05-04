
// router maps http request to controller

const express = require('express');
const router = express.Router();
const margaritasCtrl = require('../controllers/margaritas');

// define controller routes

router.get('/', margaritasCtrl.index)
router.get('/new', margaritasCtrl.new); 
router.post('/', margaritasCtrl.create);
router.get('/:id/show', margaritasCtrl.show); 

module.exports = router;