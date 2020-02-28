const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    required: true
  },
  postID: {
    type: Schema.Types.ObjectId,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('comment', commentSchema);