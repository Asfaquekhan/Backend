
const mongoose = require('mongoose');

const yourSchema = new mongoose.Schema({

  Srno: Number,
  RecipeName: String,
  TranslatedRecipeName: String,
  Ingredients: String,
  TranslatedIngredients: String,
  PrepTimeInMins: Number,
  CookTimeInMins: Number,
  TotalTimeInMins: Number,
  Servings: Number,
  Cuisine: String,
  Course: String,
  Diet: String,
  Instructions: String,
  TranslatedInstructions: String,
  URL: String,
    
});
module.exports = mongoose.model('Recipe', yourSchema);

