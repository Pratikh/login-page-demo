const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser= require('body-parser')
const { MongoClient } = require('mongodb');

const PORT = process.env.PORT || 8085;
const uri = 'mongodb+srv://admin:admin@cluster0-mkysu.mongodb.net/';

const app = express();
app.use(bodyParser.json())
app.use(cors());
if(process.env.NODE_ENV === 'production'){ // If its deployed then serve static HTML pages.
  app.use(express.static(__dirname));
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.listen(PORT,() => {
  console.log(`App listening to ${PORT}....`);
  console.log('Press Ctrl+C to quitss.');
});

const client = new MongoClient(uri, { useNewUrlParser: true });
let collection = null;
client.connect(err => {
  collection = client.db("test").collection("logins");
});

app.post('/isUserValid',(req,res)=>{
  const data = req.body;
  collection.find({}).toArray(function(error,result){
    if(error){
      throw error;
    }else{
      console.log('Got data',result,req.body);
      let isUserFound = false;
      result.forEach((row)=>{
        if(row.username === data.username && row.password === data.password){
          isUserFound = true;
        }
      })
      return res.send(isUserFound);
    }
  })
});

app.get('/allCollection',(req,res)=>{
  collection.find({}).toArray(function(err, result) {
  if (err) throw err;
  console.log(result);
  return res.send(result);
});
})
