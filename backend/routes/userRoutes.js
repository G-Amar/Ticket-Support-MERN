const express = require('express')
const router = express.Router()

//logic in separate file
const {registerUser, loginUser} = require('../controllers/userControler')

router.post('/', registerUser)
router.post('/login', loginUser)

module.exports = router 