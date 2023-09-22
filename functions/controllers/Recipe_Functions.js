const recipes = require("../Database/Model.js");

const getBy_RecipeName = async (req, res) => {
  try {
    const searchString = req.query.name ;
    const data = await recipes.find({
      RecipeName: { $regex: new RegExp(`^([^ ]+ ){1}${searchString}`, "i") },
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDietOptions = async (req, res) => {
  try {
    const Diet = "Diet"
    const data = await recipes
      .distinct(Diet)
     
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getCuisines = async (req, res) => {
  try{
    const cuisines= "Cuisine"
 const data = await recipes.distinct(cuisines)
 res.json(data)
  }catch(error){
res.status(500).json({ error: error.message });
  }
}

module.exports = { getBy_RecipeName, getDietOptions,getCuisines };


