var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  
  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true,
    unique: false
  },

  zipCode: {
    type: Number,
    required: true,
    unique: false
  },

  phoneNumber: {
    type: Number,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('user', UserSchema);
