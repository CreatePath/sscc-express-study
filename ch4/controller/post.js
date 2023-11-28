const User = require("../models/user");
const Post = require("../models/post");
const ErrorResponse = require("../errors/error-response");
const { post2json } = require("../utils/util");

class PostController {
    static async createPost(req, res) {
        const { userId, title, content} = req.body;
        const user = await User.findOne({ where: { id: userId }});

        if (!user)
            return ErrorResponse.NotFound(res, "유저를 찾을 수 없습니다.");
        
        const post = await Post.create({
            title,
            content,
            userId,
        });

        return res.json(post2json(post));
    }

    static async getPost(req, res) {
        const post = await Post.findOne({ where: { id: req.params.id } });

        if (!post)
            return ErrorResponse.NotFound(res, "게시물을 찾을 수 없습니다.");

        return res.json(post2json(post));
    }

    static async updatePost(req, res) {
        const post = await Post.update(
            { content: req.body.content },
            { where: { id: req.params.id } },
        );

        if (post[0] === 0)
            return ErrorResponse.wrongRequest(res, "게시글 수정에 실패하였습니다.");

        return res.json({ message: "게시글이 수정되었습니다."});
    }

    static async deletePost(req, res) {
        const result = await Post.destroy({ where: { id: req.params.id }});

        if (!result)
            return ErrorResponse.wrongRequest(res, "게시글 삭제에 실패하였습니다.");

        return res.json({message: "게시글이 삭제되었습니다."});
    }
};

module.exports = PostController;