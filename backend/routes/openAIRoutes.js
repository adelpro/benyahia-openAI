const express = require('express');
const router = express.Router();
const openAIController = require('../controllers/openAIController');

router.route('/text').post(openAIController.openAIText);
router.route('/image').post(openAIController.openAIImage);

module.exports = router;
