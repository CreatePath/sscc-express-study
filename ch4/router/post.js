const express = require("express");
const PostController = require("../controller/post");

const router = express.Router();

router.post("/", PostController.createPost);

router.route("/:id")
    .get(PostController.getPost)
    .patch(PostController.updatePost)
    .delete(PostController.deletePost);

module.exports = router;