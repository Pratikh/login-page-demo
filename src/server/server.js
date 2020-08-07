// const path = require('path');
const express = require('express');
const cors = require('cors');
const { startServer, getDatabase } = require('./mongoServer');

const app = express();
app.use(cors());
// const DIST_DIR = __dirname;
// const HTML_FILE = path.join(DIST_DIR, 'index.html');
// app.use(express.static(DIST_DIR));
app.get('/hello', (req, res) => {
  res.send('hello');
});

app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});
const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log('Press Ctrl+C to quit.');
  startServer();
  console.log(getDatabase());
});
