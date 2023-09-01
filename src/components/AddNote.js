import { useState } from "react";

const AddNote = ({ handeladdNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handelSaveClick = () => {
    if (noteText.trim().length > 0) {
      handeladdNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaning</small>
        <button className="save" onClick={handelSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
