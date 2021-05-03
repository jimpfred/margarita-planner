const mongoose = require('mongoose')
const Schema = mongoose.Schema


const margaritaSchema = new Schema({
    name: { type: String, required: true},
    fruit1: {type: String},
    fruit2: {type: String},
    fruit3: {type: String},
    herbsSpices: {type: String},
    tequila: {type: String},
    juices: {type: String},
    liqueur: {type: String},
    salt: {type: String},
    sweetener: {type: String},
    garnish: {type: String},
    ice: {type: String},

}, { timestamps: true })



module.exports = mongoose.model('margarita', margaritaSchema) //(model name, schema name)--turns schema into model w/methods for updating