const Sequelize = require("sequelize");

class Post extends Sequelize.Model {
    static initiate(sequelize) {
        Post.init({
            title: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            content: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: true,
            modelName: "Post",
            tableName: "post",
            paranoid: false,
            charset: "utf8mb4",
            collate: 'utf8mb4_general_ci',
        });
    }

    static associate(db) {
        db.Post.belongsTo(db.User, { foreignKey: "userId", targetKey: "id" });
        db.Post.hasMany(db.Comment, { foreignKey: "postId",  sourceKey: "id"});
    }
};

module.exports = Post;