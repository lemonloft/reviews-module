const port = 3000;
const app = require('./server.js');

app.listen(port, () => {
  console.log(`we be arriving at port ${port}`);
});