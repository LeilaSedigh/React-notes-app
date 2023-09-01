import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NodeList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const noteInit = () => {
  const localStorageData =
    JSON.parse(localStorage.getItem("react-notes-app-data")) ?? [];
  return !![...localStorageData].length
    ? localStorageData
    : [
        {
          id: nanoid(),
          text: "This is My first note",
          date: "15/04/2021",
        },
        {
          id: nanoid(),
          text: "This is My Scound note",
          date: "21/04/2021",
        },
        {
          id: nanoid(),
          text: "This is My third note",
          date: "28/04/2021",
        },
        {
          id: nanoid(),
          text: "This is My new note",
          date: "30/04/2021",
        },
      ];
};

const App = () => {
  const [notes, setNotes] = useState(noteInit);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (!!saveNotes && saveNotes?.lenght) {
      setNotes(saveNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const filteredNote = notes.filter((note) =>
    note.text.toLowerCase().includes(searchText)
  );

  return (
    <div className={`${!!darkMode && "dark-mode"}`}>
      <div className="container">
        <Header darkMode={darkMode} onClick={() => setDarkMode((previosState) => !previosState)} />
        <Search onChange={(event) => setSearchText(event.target.value)} />
        <NodeList notes={filteredNote} setNotes={setNotes} />
      </div>
    </div>
  );
};

export default App;
