import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import BackButton from "../components/BackButton"
import { toast } from "react-toastify"
import { getTicket, closeTicket } from "../features/tickets/ticketSlice"
import { useNavigate, useParams } from "react-router-dom"
import Spinner from "../components/Spinner"

const Ticket = () => {

  const {ticket, isLoading, isError, message} = useSelector((state) => state.tickets)

  const {ticketId} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    dispatch(getTicket(ticketId))
    //dont aadd dispatch or results in unending loop
    // eslint-disable-next-line
  }, [isError, message, ticketId])

  const onTicketClose = () => {
    dispatch(closeTicket(ticketId))
    toast.success('Ticket Closed')
    navigate('/tickets')
  }

  if(isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h3>Something went wrong</h3>
  }

  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton url='/tickets' />
        <h2>
          Ticket ID: {ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}</h3>
        <h3>Product: {ticket.product}</h3>
        <hr />
        <div className="ticket-desc">
          <h3>Description</h3>
          <p>{ticket.description}</p>
        </div>
      </header>

      {ticket.status !== 'closed' && (
        <button onClick={onTicketClose} className="btn btn-block btn-danger">Close Ticket</button>
      )}
    </div>
  )
}

export default Ticket