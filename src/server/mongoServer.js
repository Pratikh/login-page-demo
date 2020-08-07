const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://admin:admin@cluster0-mkysu.mongodb.net/<dbname>?retryWrites=true&w=majority';

let database = null;

async function startServer() {
  const connection = await MongoClient.connect(uri, { useNewUrlParser: true });
  database = connection.db();
  // console.log('Now connected to MongoDB server');
}

async function getDatabase() {
  if (!database) await startServer();
  return database;
}

module.exports = { startServer, getDatabase };
