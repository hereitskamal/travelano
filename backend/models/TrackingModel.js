// models.js
const mongoose = require('mongoose');

const userTrackingSchema = new mongoose.Schema({
  userId: String,
  pageViews: [
    {
      event: String,
      pathname: String,
      timestamp: { type: Date, default: Date.now }
    }
  ]
});

const UserTracking = mongoose.model('UserTracking', userTrackingSchema);

module.exports = { UserTracking };
