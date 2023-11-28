const User = require("../models/user");
const Post = require("../models/post");
const Comment = require("../models/comment");
const ErrorResponse = require("../errors/error-response");
const { comment2json } = require("../utils/util");

class CommentController {
    static async createComment(req, res) {
        const user = User.findOne({ where: { id: req.body.userId } });
        const post = Post.findOne({ where: { id: req.body.postId } });

        if (!(await user))
            return ErrorResponse.NotFound(res, "등록되지 않은 사용자입니다.");

        if (!(await post))
            return ErrorResponse.NotFound(res, "게시물을 찾을 수 없습니다.");
        
        const comment = await Comment.create({
            comment: req.body.comment,
            commenter: req.body.userId,
            postId: req.body.postId,
        });

        return res.json(comment2json(comment));   
    }

    static async getComment(req, res) {
        const comment = await Comment.findOne({ where: { id: req.params.id } });
        
        if (!comment)
            return ErrorResponse.NotFound(res, "댓글을 찾을 수 없습니다.");

        return res.json(comment2json(comment));
    }

    static async updateComment(req, res) {
        const comment = await Comment.findOne({ where: { id: req.params.id} });

        if (!comment)
            return ErrorResponse.NotFound(res, "댓글을 찾을 수 없습니다.");
        
        const updatedComment = await Comment.update({
            comment: req.body.comment,
        }, {
            where: { id: req.params.id },
        });

        if (updatedComment[0] === 0)
            return ErrorResponse.wrongRequest(res, "댓글 수정에 실패하였습니다.");
        
        return res.json({ message: "댓글이 수정되었습니다." });
    }

    static async deleteComment(req, res) {
        const result = await Comment.destroy({
            where: { id: req.params.id }
        });

        if (result === 0)
            return ErrorResponse.wrongRequest(res, "댓글 삭제에 실패하였습니다. ");

        return res.json({ message: "댓글이 삭제되었습니다." });
    }
}

module.exports = CommentController;