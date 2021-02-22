let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Order Model
let orderSchema = require('../models/Order');

// CREATE Order
router.route('/create-order').post((req, res, next) => {
  orderSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

module.exports = router;