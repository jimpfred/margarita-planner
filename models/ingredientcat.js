const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ingredientCatSchema = new Schema({
    name: { type: String, required: true, unique: true }
}, { timestamps: true })



module.exports = mongoose.model('Ingredientcat', ingredientCatSchema) //(model name, schema name)--turns schema into model w/metods for updating

