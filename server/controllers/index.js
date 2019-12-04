const db = require('../../database/db.js');

module.exports = {
  reviews: {
    get: (req, res) => {
      db.getReviews(req.params.hostId, (err, results) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.status(200).send(results);
        }
      });
    },
  },
};
