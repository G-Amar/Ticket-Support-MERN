const express = require('express')
const router = express.Router()

//logic in separate file
const {registerUser, loginUser, getMe} = require('../controllers/userControler')

const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe) //protect acts as a guard

module.exports = router 