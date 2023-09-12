const express = require('express')
const controllers = require('../controllers/Recipe_Functions.js')
const router =express.Router();

router.route('/').get(controllers.getBy_RecipeName)
router.route('/testing').get(controllers.getAllProductsTesting) 

module.exports = router;