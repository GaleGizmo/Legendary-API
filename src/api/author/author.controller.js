const Author = require("./author.model");
const { deleteFile } = require("../../middlewares/deletefile");
const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();

    return res.json(authors);
  } catch (error) {
    return next(error);
  }
};

const postAuthor = async (req, res, next) => {
  try {
    const author = await Author.findOne({ name: req.body.name });
    if (author) {
      return res
        .status(400)
        .json({ message: "Este autor ya está en la base de datos" });
    } else {
      const newAuthor = await new Author(req.body);

      await newAuthor.save();
      return res.status(201).json(newAuthor);
    }
  } catch (error) {
    next(error);
  }
};
const deleteAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedAuthor = await Author.findByIdAndDelete(id);
    return res.status(200).json(deletedAuthor);
  } catch (error) {
    next(error);
  }
};
const updateAuthor = async (req, res, next) => {
  try {
    const { name } = req.params;
    if (req.file) {
      const oldAuthor = await Author.findOne({ name: name });
      if (oldAuthor.image) {
        deleteFile(oldAuthor.image);
      }

      req.body.image = req.file.path;
    }
    const updatedAuthor = await Author.findOneAndUpdate(
      { name: name },
      req.body,
      { new: true }
    );

    return res.status(200).json(updatedAuthor);
  } catch (error) {
    next(error);
  }
};

module.exports = { postAuthor, getAllAuthors, deleteAuthor, updateAuthor };
