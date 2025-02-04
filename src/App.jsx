import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxForm from './components/MailboxForm/MailboxForm';
import LetterForm from './components/LetterForm/LetterForm.jsx'

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters ] = useState([]);

  const addBox = (formData) => {
    formData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, formData]);
  };

  const addLetter = (formData) => {
    formData._id = letters.length + 1;
    setLetters([...letters, formData]);
  };
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} letters={letters}/>}
        />
        <Route path="/new-letter" element={<LetterForm mailboxes={mailboxes} addLetter={addLetter}/>} />
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
      </Routes>
    </>
  )
};

export default App;
