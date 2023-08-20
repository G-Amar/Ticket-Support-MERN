const express = require('express')
const router = express.Router()
const {getTickets, createTicket} = require('../controllers/ticketController')

const {protect} = require('../middleware/authMiddleware')

//get/set is protected (must be logged in)
router.route('/').get(protect, getTickets).post(protect, createTicket)

module.exports = router 