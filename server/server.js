const express = require('express');
const path = require('path');
const controller = require('./controllers');

const app = express();

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/:hostId', express.static(path.join(__dirname, '../public')));

app.get('/api/reviews', (req, res) => {
  controller.reviews.get(req, res);
});

app.get('/api/reviews/:hostId', (req, res) => {
  controller.reviews.get(req, res);
});

module.exports = app;
