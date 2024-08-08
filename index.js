const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Fist Node Express APP - Hello World');
});

app.listen(port, () => {
  console.log(`First Node Express App listening at http://localhost:${port}`);
});