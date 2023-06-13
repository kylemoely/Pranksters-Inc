const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  prankee: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  dateTime: {
    type: Date,
    required: true
  },
  prank: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Prank'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  completionDate: {
    type: Date
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
