var mongoose = require('mongoose');

var CrimeSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    unique: false
  },

  message: {
    type: String,
    required: true,
    unique: false
  },

  time: {
    type: Date,
    required: true,
    unique: false
  },

  reportedBy: {
    type: String,
    required: true,
    unique: false
  },

  phoneNumber: {
    type: Number,
    required: true,
    unique: false
  },

  zipCode: {
    type: Number,
    required: true,
    unique: false
  }

});

module.exports = mongoose.model('crime', CrimeSchema);
