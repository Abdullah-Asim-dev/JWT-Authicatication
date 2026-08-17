const express = require('express');
// 'controllers' se 's' mita diya taake sahi folder access ho
const loginController = require('../controller/login'); 
const router = express.Router();

router.post('/login', loginController.login);

module.exports = router;
