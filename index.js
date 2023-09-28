const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors')
const product_routes = require('./functions/routes/Recipe_Routes.js');
const connect = require('./functions/Database/connect.js')

const app = express();
const port = 3000; 
app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
  res.send("hi,i am live")
});

const start =async ()=>{
try{
  await connect()
  app.listen(port,()=>{ console.log(`Running on port ${port}`); });
  }

catch (error){
console.log(error)
}
}

app.use("/api/recipes",product_routes )
start()
module.exports.handler =serverless(app)