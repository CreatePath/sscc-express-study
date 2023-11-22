const express = require("express");
const UserController = require("../controller/user");
const router = express.Router();

router.post("/register", UserController.registerUser);

router.get("/info/:id", UserController.findUser);

router.patch("/info", UserController.updatePw);

router.delete("/info/:id", UserController.deleteUser);

module.exports = router;