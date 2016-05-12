var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: false,
    unique: false
  },

  zipCode: {
    type: Number,
    required: false,
    unique: false
  },

  phoneNumber: {
    type: Number,
    required: false,
    unique: false
  }
})

module.exports = mongoose.model('user', UserSchema);
