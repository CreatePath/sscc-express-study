function user2json(user) {
    return {
        id: user.id,
        name: user.name,
        studentId: user.studentId,
        nickname: user.nickname,
        comment: user.comment,
    };
}

function post2json(post) {
    return {
        id: post.id,
        title: post.title,
        content: post.content,
        userId: post.userId,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt
    }
}

function comment2json(comment) {
    return {
        id: comment.id,
        comment: comment.comment,
        postId: comment.postId,
        userId: comment.commenter,
        createdAt: comment.createdAt,
        updatedAt: comment.updatedAt
    };
}

module.exports = { user2json, post2json, comment2json, };