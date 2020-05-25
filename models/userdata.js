const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/local');

const Schema = mongoose.Schema;
const UserDetail = new Schema({
      username: String,
      password: String,
      phone: Number,
      agreementDate : Date,
      agreementNo:Number,
      companyName:String,
      startDate: String,
      street: String,
      state :String,
      postCode :Number,
      email: String,
      furnitureName: String,
      Quantity: Number,
      telephonicLine: String,
      carParking: String,
      totalMonthlyRate: String,
      securityDeposit: String,
      keySet: Number,
      boomGateRemote: String
      

    });
    const UserDetails = mongoose.model('userInfo', UserDetail, 'userInfo');

module.exports =UserDetails;