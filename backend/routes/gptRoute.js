const express = require("express");
const router = express.Router();
const gptController = require("../controllers/gptController");

router.route("/text").post(gptController.gptText);
router.route("/image").post(gptController.gptImage);

module.exports = router;
