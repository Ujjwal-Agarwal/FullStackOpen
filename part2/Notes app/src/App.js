import { useState,useEffect } from "react";
import Note from "./components/Note";
import axios from 'axios';

// const promise = axios.get('http://localhost:3001/notes')
// promise.then(response => {
//   console.log(response)
// })

// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2);

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("A new Note");
  const [showAll,setShowAll] = useState(true);

  const addNote = (event) => {
    event.preventDefault(); // Default event for submit will cause the page to reload
    // console.log("Button clicked",event.target);
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };
    if (newNote.length !== 0) {
      setNotes(notes.concat(noteObject));
    }
    setNewNote("");
  };
  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter(note => note.important===true)
  const changePriority = ()=>{
    setShowAll(!showAll)
  }

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  // console.log('render', notes.length, 'notes')

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <ul>
          {notesToShow.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </ul>
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
      <button onClick={()=>{changePriority()}}>Sort by Important</button>
    </div>
  );
};

export default App;
