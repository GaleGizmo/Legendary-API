const { postAuthor, getAllAuthors, deleteAuthor, updateAuthor } = require("./author.controller")
const upload = require("../../middlewares/file");

const AuthorRoutes=require("express").Router()

AuthorRoutes.post("/",  postAuthor)
AuthorRoutes.get("/", getAllAuthors)
AuthorRoutes.delete("/:id",  deleteAuthor)
AuthorRoutes.put("/:name", upload.single("image"), updateAuthor)

module.exports=AuthorRoutes