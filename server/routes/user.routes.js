const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller.js");
const phoneNumber = require("../controllers/phoneNumber.js");



router.post("/post", controller.postNumber);
router.post("/postNumber", phoneNumber.guardarPhoneNumber);
router.get("/getNumber", phoneNumber.getAllnumbers);

module.exports = router;
