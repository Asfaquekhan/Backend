const mongoose = require('mongoose')
require('dotenv').config()

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const mongoDB = `mongodb+srv://${username}:${password}@cluster0.ah1b5ds.mongodb.net/Food_Recipes?retryWrites=true&w=majority`;


const connectDB = ()=>{
  return mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log('Connected to MongoDB')
  })
}


module.exports = connectDB;



