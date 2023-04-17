const { deleteFile } = require("../../middlewares/deletefile");
const Album = require("./albums.model");

const getAllAlbums = async (req, res, next) => {
  try {
    const albums = await Album.find();

    return res.json(albums);
  } catch (error) {
    return next(error);
  }
};

// const getDiscoById = async (req,res)=>{
//     try {
//         const {id}=req.params
//         const disco=await Disco.findById(id)
//         return res.json(disco)

//     } catch (error) {
//         return res.json({mensaje:"Error al recoger el disco", error:error})
//     }
// }
const getOneAlbum = async (req, res) => {
  try {
    const { title } = req.params;

    const album = await Album.findOne({ title: title });
    if (!album) {
      return res.json("No hay discos con ese título");
    }
    return res.json(album);
  } catch (error) {
    return next(error);
  }
};

const getByYear = async (req, res) => {
  try {
    const { year } = req.params;
    const resultado = await Album.findOne({ year: year });

    return res.json(resultado);
  } catch (error) {
    return next(error);
  }
};
const getAllTitles = async (req, res) => {
  try {
    // const{title}=req.params

    const albums = await Album.find();
    const albumsFiltered = albums.map((album) => album.title);

    return res.json(albumsFiltered);
  } catch (error) {
    return next(error);
  }
};

const postAlbum = async (req, res, next) => {
  try {
    const album = await Album.findOne({ title: req.body.title });
    if (album) {
      return res
        .status(400)
        .json({ message: "Este álbum ya está en la base de datos" });
    } else {
      const newAlbum = new Album(req.body);
      if (req.file) {
        newAlbum.cover = req.file.path;
      }
      await newAlbum.save();

      return res.json(newAlbum);
    }
  } catch (error) {
    return next(error);
  }
};

const deleteAlbum = async (req, res, next) => {
  try {
    const { title } = req.params;
    const deletedAlbum = await Album.findOneAndDelete({ title: title });
    return res.status(200).json(deletedAlbum);
  } catch (error) {
    next(error);
  }
};

const updateAlbum = async (req, res, next) => {
  try {
    const { title } = req.params;
    if (req.file) {
      const oldAlbum = await Album.findOne({ title: title });
      if (oldAlbum.cover) {
        deleteFile(oldAlbum.cover);
      }

      req.body.cover = req.file.path;
    }
    const updatedAlbum = await Album.findOneAndUpdate(
      { title: title },
      req.body,
      { new: true }
    );

    return res.status(200).json(updatedAlbum);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllAlbums,
  getOneAlbum,
  getByYear,
  getAllTitles,
  postAlbum,
  deleteAlbum,
  updateAlbum,
};
