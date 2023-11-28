const Sequelize = require("sequelize");

class User extends Sequelize.Model {
    static initiate(sequelize) {
        User.init({
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            studentId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            nickname: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING(128),
                allowNull: false,
            },
            comment: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: "User",
            tableName: 'users',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.User.hasMany(db.Post, { foreignKey: "userId", sourceKey: "id"});
        db.User.hasMany(db.Comment, { foreignKey: "commenter", sourceKey: "id" });
        // db.User.hasOne(db.Comment, { foreignKey: "UserId", sourceKey: "id"});
    }
};

module.exports = User;