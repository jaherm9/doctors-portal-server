const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { MongoClient } = require("mongodb");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// connect to database
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8ztnx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//CRUD Operatoin

async function run() {
  try {
    await client.connect();
    // console.log("database conntected successfully");
    const database = client.db('doctors_portal');
    const appointmentCollection = database.collection('appointments');
    app.post('/appointments', async (req, res) =>{
      
    })
    
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello Doctors portal!");
});

app.listen(port, () => {
  console.log(`listening at:${port}`);
});


// naming conventoin
/* app.get('/users')
    app.post('/users')
    app.get('/users/:id')
    app.put('/users/:id')
    app.delete('/users/:id')
    // users: get
    // users: post */