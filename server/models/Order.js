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
  
  dateTime: {
    type: String,
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
