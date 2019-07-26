const express = require('express');
const app = express();

app.use(express.json());

app.post('/reverse', (req, res) => {
  res.send({
    message: req.body.message.split(''),
  });
});

app.get('/health', (req, res) => {
  res.status(200).send('I am healthy.');
});

module.exports = app;
