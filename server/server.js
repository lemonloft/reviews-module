const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const controller = require('./controllers');

app.use("/", express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log('we be arriving at port '+ port);
})

app.get('/reviews', function(req, res) {
  console.log('GET');
  controller.reviews.get(req, res);
});