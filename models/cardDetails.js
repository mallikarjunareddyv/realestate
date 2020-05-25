const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/local');

const Schema = mongoose.Schema;
const CardDetail = new Schema({
      cardholder: String,
      expdate: String,
      cvv: Number,
      cardno : Number
    });
    const CardDetails = mongoose.model('CardInfo', CardDetail, 'CardInfo');

module.exports = CardDetails;