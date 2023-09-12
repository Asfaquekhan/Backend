const express = require('express');
const cors = require('cors')
const product_routes = require('./routes/Recipe_Routes.js')
const connect = require('./Database/connect.js')

const app = express();
const port = 3000; // Change to your desired port number
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
//middle wear or to  set routers
app.use("/api/recipes",product_routes )
start()