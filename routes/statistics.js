const express = require("express");
const router = express.Router();
const statisticsController = require("../controller/statistics");

router.get("/total-songs", statisticsController.getTotalSongs);
router.get("/total-artists", statisticsController.getTotalArtists);
router.get("/total-albums", statisticsController.getTotalAlbums);
router.get("/total-genres", statisticsController.getTotalGenres);
router.get("/songs-by-genre", statisticsController.getSongsByGenre);
router.get("/songs-by-album", statisticsController.getSongsByAlbum);
router.get("/songs-by-artist", statisticsController.getSongsByArtist);
router.get("/albums-by-artist", statisticsController.getAlbumsByArtist);

module.exports = router;
