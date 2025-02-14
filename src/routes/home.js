const HomeController = require('../controllers/HomeController');
const { Router } = require('express');
const router = Router();

router.get('/', HomeController.index);
router.get('/login', HomeController.login);
router.get('/register', HomeController.index);
router.get('/error', HomeController.index);

module.exports = router;
