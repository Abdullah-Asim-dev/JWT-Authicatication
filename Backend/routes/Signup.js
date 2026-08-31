const express = require('express');
const router = express.Router();

// Destructuring use karein taake direct function mil sake
const { createUser } = require('../controller/signup');

// base path '/signup' pehle se app.js mein set hai, is liye yahan sirf '/'
router.post('/', createUser);

module.exports = router;

