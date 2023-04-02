const express = require("express");
const router = express.Router();

const controller = require("../controllers/user.controller.js");

router.post("/post", controller.postAuthor);

module.exports = router;
