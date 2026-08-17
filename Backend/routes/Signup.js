const express = require('express');
const router = express.Router();

// Destructuring use karein taake direct function mil sake
const { createUser } = require('../controller/signup');

// '.signup' ki jagah 'createUser' use karein
router.post('/signup', createUser);

module.exports = router;

