const express = require('express');

// eslint-disable-next-line prefer-destructuring
const log = console.log;
const server = express();
const PORT = 3000;

server
  .get('/status', (req, res) => {
    res.json({
      status: 'online',
    });
  })
  .listen(PORT, () => {
    log(`Server using ${PORT} port`);
  });
