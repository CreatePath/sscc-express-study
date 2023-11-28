const express = require("express");
const UserController = require("../controller/user");

const router = express.Router();

router.route("/register")
    .post(UserController.register);

router.route("/info/:id")
    .get(UserController.findUserById)
    .patch(UserController.updatePassword)
    .delete(UserController.deleteUser);

module.exports = router;