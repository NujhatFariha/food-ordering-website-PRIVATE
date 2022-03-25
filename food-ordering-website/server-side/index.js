const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const cors = require('cors');
require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fsrih.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try {
      await client.connect()

      const database = client.db('food-ordering-website')
      const foodsCollection = database.collection('food')
     

       // get all foods
       app.get('/allFood', async (req, res) => {
          const cursor = foodsCollection.find({})
          const food = await cursor.toArray()
          res.send(food)
      })

  }
  finally {
       await client.close()
  }
}


app.get('/', (req, res) => {
    res.send('Hello World!')
  })


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })