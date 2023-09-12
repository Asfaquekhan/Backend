const recipes = require('../Database/Model.js')

 const getBy_RecipeName = async (req, res) => {
    try {
      const searchString =req.query.name || ''
      const data = await recipes.find({
        RecipeName: { $regex: new RegExp(`^([^ ]+ ){1}${searchString}`, 'i') },
      })
       res.json(data)
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};
 const getAllProductsTesting = async (req, res) => {

  try {
    const searchString =req.query.name || ''
    const data = await recipes.find({
      RecipeName: { $regex: new RegExp(`^([^ ]+ ){1}${searchString}`, 'i') },
    }).sort({TotalTimeInMins: 1})
     res.json(data)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

module.exports = {getBy_RecipeName, getAllProductsTesting}