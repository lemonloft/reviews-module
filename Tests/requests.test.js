// require("@babel/polyfill");
const app = require('../server/server.js');
const supertest = require('supertest');
const request = supertest(app);


describe('Test GET API request', () => {
  it('Gets the test endpoint', async done => {
    // Sends GET Request to /test endpoint
    const res = await request.get('/api/reviews');
    done();
  });
});