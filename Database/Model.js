
import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({

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

export default mongoose.model('data', blogSchema);

