const express = require('express')

const router = express.Router();
const userController = require('../controllers/userController')

// /GET POST => LOGIN
router.get('/', userController.getUsers)

// /POST CREATE_USER => SIGNUP
router.post('/signup', userController.postUser)

// /PUT UPDATE_USER => 


// /POST OTP

// /POST VERIFY_OTP



module.exports = router;