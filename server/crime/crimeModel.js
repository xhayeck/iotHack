var mongoose = require('mongoose');

var CrimeSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    unique: true
  },

  message: {
    type: String,
    required: false,
    unique: false
  },

  time: {
    type: Date,
    required: false,
    unique: false
  },

  reportedBy: {
    type: String,
    required: false,
    unique: false
  },

  phoneNumber: {
    type: Number,
    required: false,
    unique: false
  },

  zipCode: {
    type: Number,
    required: false,
    unique: false
  }

});

module.exports = mongoose.model('crime', CrimeSchema);
