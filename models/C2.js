
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const C2Schema = new Schema({
  faceplateprice: {
    type: String,
    required: true  
  }, 
  shellsprice: { 
    type: String,
    required: true 
  },
  artworkprice: { 
    type: String,
    required: true 
  },
  modeltype: [
    {
      c2: {
        type: String,
        required: true
      },
      c4: {
        type: String
      },
      c9: {
        type: String
      }
    }],
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = C2 = mongoose.model('modelC2', C2Schema);