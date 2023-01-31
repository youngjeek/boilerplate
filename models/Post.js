const mongoose = require('mongoose');

//model은 schema감싸줌.
const postSchema = mongoose.Schema(
  {
    writer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    title: {
      type: String,
      maxlength: 50,
    },
    email: {
      type: String,
      trim: true,
      unigue: 1,
    },
    password: {
      type: String,
      minlength: 4,
      maxlength: 15,
    },
    tags: { tags: String, maxlength: 10 },
    token: {
      type: String,
    },
    tokenExp: {
      type: Number,
    },

    description: { type: String },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

module.exports = { Post };
