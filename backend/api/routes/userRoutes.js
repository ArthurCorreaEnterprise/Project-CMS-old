// api/routes/userRoutes.js

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/users', userController.listUsers);
router.post('/users', userController.createUser);

module.exports = router;
