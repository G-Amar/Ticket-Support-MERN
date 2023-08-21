const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Note = require('../models/noteModel')
const Ticket = require('../models/ticketModel')


// @desc Get notes for a ticket
// @route GET /api/tickets/:ticketId/notes
// @access Private
const getNotes = asyncHandler( async(req, res) => {
  //middleware sets and gives us req.user.id
  const user = await User.findById(req.user.id)

  if(!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const ticket = await Ticket.findById(req.params.ticketId)
  
  if(!ticket){
    res.status(404)
    throw new Error('No such ticket')
  }

  if(ticket.user.toString() !== req.user.id){
    res.status(401)
    throw new Error('User not authorized')
  }

  const notes = await Note.find({ ticket: req.params.ticketId })

  res.status(200).json(notes) 
})


// @desc create note for a ticket
// @route POST /api/tickets/:ticketId/notes
// @access Private
const addNote = asyncHandler( async(req, res) => {
  //middleware sets and gives us req.user.id
  const user = await User.findById(req.user.id)

  if(!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const ticket = await Ticket.findById(req.params.ticketId)
  
  if(!ticket){
    res.status(404)
    throw new Error('No such ticket')
  }

  if(ticket.user.toString() !== req.user.id){
    res.status(401)
    throw new Error('User not authorized')
  }

  const note = await Note.create({ 
    ticket: req.params.ticketId,
    text: req.body.text,
    isStaff: false,
    user: req.user.id,
  })

  res.status(200).json(note) 
})


module.exports = {
  getNotes,
  addNote
}