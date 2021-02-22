const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let orderSchema = new Schema({
  fname: {
    type: String
  },
  lname: {
    type: String
  },
  product: {
    type: String
  },
  amount: {
    type: Number
  }
}, {
    collection: 'orders'
  })

module.exports = mongoose.model('Order', orderSchema)