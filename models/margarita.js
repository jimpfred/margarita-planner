const mongoose = require('mongoose')
const Schema = mongoose.Schema


const margaritaSchema = new Schema({
    name: String,
    ingredient: [{type: Schema.Types.ObjectId, ref: 'Ingredient'}]
    
}, { timestamps: true })



module.exports = mongoose.model('margarita', margaritaSchema) //(model name, schema name)--turns schema into model w/methods for updating