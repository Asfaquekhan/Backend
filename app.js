import 'dotenv/config'
import { MongoClient } from 'mongodb';
import express from 'express'
import cors from "cors";



const username =process.env.DB_USERNAME
const password =process.env.DB_PASSWORD
const mongoDB =`mongodb+srv://${username}:${password}@cluster0.ah1b5ds.mongodb.net/`;

const databaseName = 'Food_Recipes'; // Replace with your database name
const collectionName = 'data'; // Replace with your collection name






const app = express();
const port = 3000; // Change to your desired port number
app.use(cors());


app.get('/api/recipes', async (req, res) => {
  const client = new MongoClient(mongoDB, {
  
  });

  try {
    // Connect to the MongoDB Atlas database
    await client.connect();

    // Access the database and collection
    const database = client.db(databaseName);
    const collection = database.collection(collectionName);

    // Retrieve all documents from the collection
    const documents = await collection.find({}).toArray();

    res.json(documents); // Send the retrieved data as JSON response
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({ error: 'An error occurred while retrieving data.' });
  } finally {
    // Close the MongoDB Atlas connection
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});