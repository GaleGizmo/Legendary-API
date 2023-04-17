const upload = require("../../middlewares/file");

const {
  getAllAlbums,
  getOneAlbum,
  getByYear,
  getAllTitles,
  postAlbum,
  deleteAlbum,
  updateAlbum,
} = require("./albums.controller");

const albumsRoutes = require("express").Router();

albumsRoutes.get("/album/:title", getOneAlbum);
albumsRoutes.get("/year/:year", getByYear);
albumsRoutes.post("/", upload.single("cover"), postAlbum)
albumsRoutes.get("/titles", getAllTitles)
albumsRoutes.get("/", getAllAlbums);
albumsRoutes.delete("/:title", deleteAlbum)
albumsRoutes.put("/:title", upload.single("cover"), updateAlbum)

module.exports = albumsRoutes;