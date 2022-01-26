const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema(
  {
    title: { 
       type: String,
       required: true
       },
    author: { 
      type: String, 
      required: true 
    },
    year: { 
      type: Number, 
      required: true 
    },     
    pages: { 
      type: Number, 
      required: true,
      min: 1 
    }
  }
);

module.exports = mongoose.model('book', BookSchema);