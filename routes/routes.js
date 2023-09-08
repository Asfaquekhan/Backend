import express from 'express';
import '../Database/db.js';
import { database } from '../Database/Model.js';

const app = express();

app.get("/users", async (request, response) => {
    const users = await database.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });