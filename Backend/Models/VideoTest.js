const mongoose = require('mongoose')
const VideoTest = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
})
module.exports = mongoose.model('VideoTest', VideoTest)
