const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  artist: {
    type: String,
    required: true,
    trim: true,
  },
  album: {
    type: String,
    trim: true,
  },
  genre: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

songSchema.plugin(mongoosePaginate);

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
