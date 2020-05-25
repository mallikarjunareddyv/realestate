const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/local');

const Schema = mongoose.Schema;
const HouseDetail = new Schema({
      office: String,
      space: String,
      price: String,
      dateFrom: Date,
      dateTo: Date
    });
    const HouseDetails = mongoose.model('HouseInfo', HouseDetail, 'HouseInfo');

module.exports = HouseDetails;