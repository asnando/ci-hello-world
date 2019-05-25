const express = require('express');

// eslint-disable-next-line prefer-destructuring
const log = console.log;
const app = express();
const PORT = 3000;

app
  .get('/status', (req, res) => {
    res.json({
      status: 'online',
    });
  });


const server = app.listen(process.env.PORT || PORT);

module.exports = server;
