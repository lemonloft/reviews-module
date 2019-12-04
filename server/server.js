const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const controller = require('./controllers');

app.use("/", express.static(path.join(__dirname, '../public')));
app.use("/:hostId", express.static(path.join(__dirname, '../public')));

app.get('/api/reviews', function(req, res) {
  console.log('GET');
  controller.reviews.get(req, res);
});

app.get('/api/reviews/:hostId', function(req, res) {
  console.log('GETTT');
  console.log(req.params.hostId);
  controller.reviews.get(req, res);
});

app.listen(port, () => {
  console.log('we be arriving at port '+ port);
})
