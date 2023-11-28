const Sequelize = require("sequelize");
const User = require("./user");
const Comment = require("./comment");
const Post = require("./post");

const env = process.env.NODE_DEV || "development";
const config = require("../config/config.json")[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

db.User = User;
db.Post = Post;
db.Comment = Comment;

User.initiate(sequelize);
Post.initiate(sequelize);
Comment.initiate(sequelize);

User.associate(db);
Post.associate(db);
Comment.associate(db);

module.exports = db;