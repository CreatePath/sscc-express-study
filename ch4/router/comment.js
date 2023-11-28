const express = require("express");
const CommentController = require("../controller/comment");

const router = express.Router();

router.post("/", CommentController.createComment);

router.route("/:id")
    .get(CommentController.getComment)
    .patch(CommentController.updateComment)
    .delete(CommentController.deleteComment);


module.exports = router;