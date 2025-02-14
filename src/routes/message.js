const { Router } = require('express');
const MessageController = require('../controllers/MessageController');

const router = Router();

router.get('/', MessageController.index);

module.exports = router;
