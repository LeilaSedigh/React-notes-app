import { nanoid } from "nanoid";
import AddNote from "./AddNote";
import Note from "./Note";

const NodeList = ({ notes, setNotes }) => {
  const handeladdNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const handelDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className="notes-list">
      {notes?.map((note) => (
        <Note
          key={note.id}
          note={note}
          onClick={() => handelDeleteNote(note.id)}
        />
      ))}
      <AddNote handeladdNote={handeladdNote} />
    </div>
  );
};

export default NodeList;
