const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    genre: [{type: String}],
    songs: [{type: String}],
    cover: { type: String },
    year: { type: Number, required: true },
    length: { type: Number },
    artist: { type: String, required:true },
    label: { type: String },
    producer: { type: String },
    spotify: { type: String },
    description: {type: String}
  },
  {
    timestamps: true,
  }
);

const Album = mongoose.model("albums", AlbumSchema);
module.exports = Album;