const mongoose = require('mongoose')
const Schema = mongoose.Schema


const margaritaSchema = new Schema({
    name: { type: String, required: true},
    fruit1: {type: String, default: 'none'},
    fruit1Cups: {type: Number, default: 0},
    fruit2: {type: String, default: 'none'},
    fruit2Cups: {type: Number, default: 0},
    fruit3: {type: String, default: 'none'},
    fruit3Cups: {type: Number, default: 0},
    herbsSpices: {type: String, default: 'none'},
    herbsSpicesTsp: {type: Number, default: 0},
    tequila: {type: String},
    tequilaOz: {type: Number, default: 0},
    juices: {type: String, default: 'none'},
    juicesOz: {type: Number, default: 0},
    liqueur: {type: String, default: 'none'},
    liqueurOz: {type: Number, default: 0},
    salt: {type: String},
    sweetener: {type: String, default: 'none'},
    sweetenerTsp: {type: Number, default: 0},
    garnish: {type: String, default: 'none'},
    ice: {type: String},

}, { timestamps: true })



module.exports = mongoose.model('margarita', margaritaSchema) //(model name, schema name)--turns schema into model w/methods for updating