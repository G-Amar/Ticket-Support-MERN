import { useSelector } from "react-redux"

const NoteItem = ({note}) => {

  const {user} = useSelector((state) => state.auth)

  return (
    <div className="note" style={{
      backgroundColor: note.isStaff ? 'rgba(0,0,0,0.7)' : '#ffffff',
      color: note.isStaff ? '#ffffff' : '#000000',
    }}>
      <h4>
        Note from <span>{note.isStaff ? 'Staff' : user.name}</span>
      </h4>
      <p>{note.text}</p>
      <div className="note-date">
        {new Date(note.createdAt).toLocaleString('en-US')}
      </div>
    </div>
  )
}

export default NoteItem