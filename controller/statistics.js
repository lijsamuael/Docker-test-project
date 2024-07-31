const mongoose = require("mongoose");
const Song = require("../models/song");

// Get total number of songs
const getTotalSongs = async (req, res) => {
  try {
    const totalSongs = await Song.countDocuments();
    res.json({ totalSongs });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get total number of artists
const getTotalArtists = async (req, res) => {
  try {
    const totalArtists = await Song.distinct("artist").then(
      (artists) => artists.length
    );
    res.json({ totalArtists });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get total number of albums
const getTotalAlbums = async (req, res) => {
  try {
    const totalAlbums = await Song.distinct("album").then(
      (albums) => albums.length
    );
    res.json({ totalAlbums });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get total number of genres
const getTotalGenres = async (req, res) => {
  try {
    const totalGenres = await Song.distinct("genre").then(
      (genres) => genres.length
    );
    res.json({ totalGenres });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get number of songs in each genre
const getSongsByGenre = async (req, res) => {
  try {
    const songsByGenre = await Song.aggregate([
      { $group: { _id: "$genre", songsCount: { $sum: 1 } } },
    ]);
    res.json(songsByGenre);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get number of songs in each album
const getSongsByAlbum = async (req, res) => {
  try {
    const songsByAlbum = await Song.aggregate([
      { $group: { _id: "$album", songsCount: { $sum: 1 } } },
    ]);
    res.json(songsByAlbum);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get number of songs each artist has
const getSongsByArtist = async (req, res) => {
  try {
    const songsByArtist = await Song.aggregate([
      { $group: { _id: "$artist", songsCount: { $sum: 1 } } },
    ]);
    res.json(songsByArtist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get number of albums each artist has
const getAlbumsByArtist = async (req, res) => {
  try {
    const albumsByArtist = await Song.aggregate([
      {
        $group: {
          _id: "$artist",
          albums: { $addToSet: "$album" },
        },
      },
      {
        $project: {
          _id: 1,
          albumsCount: { $size: "$albums" },
        },
      },
    ]);
    res.json(albumsByArtist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



module.exports = {
  getTotalSongs,
  getTotalArtists,
  getTotalAlbums,
  getTotalGenres,
  getSongsByGenre,
  getSongsByAlbum,
  getSongsByArtist,
  getAlbumsByArtist,
};
