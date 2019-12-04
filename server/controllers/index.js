var db = require('../../database/db.js');

module.exports = {
    reviews: {
        get: function (req, res) {
            db.getReviews(req.params.hostId, function(err, results) {
                if (err) { 
                    res.status(400).send(err)
                } else {
                    res.status(200).send(results)
                    // res.status(200).json(results);
                }
            });
        }
    }
};