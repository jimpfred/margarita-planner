const mongoose = require('mongoose')
const Schema = mongoose.Schema


const margaritaSchema = new Schema({
    name: { type: String, required: true},
    fruit1: {type: String},
    
    
}, { timestamps: true })



module.exports = mongoose.model('margarita', margaritaSchema) //(model name, schema name)--turns schema into model w/methods for updating