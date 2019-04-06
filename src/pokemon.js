const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PokemonSchema = new Schema({
   name: {
    type: String,
    required: [true, 'Name is required.']
   },
   type: String
  })
//Pokemon constant represents the entire collection of data
const Pokemon = mongoose.model('Pokemon', PokemonSchema);
module.exports = Pokemon;