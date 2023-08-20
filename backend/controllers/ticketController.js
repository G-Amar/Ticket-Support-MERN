const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')


// @desc Get user tickets
// @route GET /api/tickets
// @access Private
const getTickets = asyncHandler( async(req, res) => {
  //middleware sets and gives us req.user.id
  
   res.status(200).json({message: 'getTickets'}) 
})

// @desc Create tickets
// @route POST /api/tickets
// @access Private
const createTicket = asyncHandler( async(req, res) => {
  //middleware sets and gives us req.user.id
  
   res.status(200).json({message: 'createTickets'}) 
})


module.exports = {
  getTickets,
  createTicket
}