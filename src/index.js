const express = require('express');

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
