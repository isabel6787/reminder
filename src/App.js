import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form"
import ReminderList from './components/ReminderList';

function App() {
  const [inputText, setInputText] = useState("");
  const [reminders, setReminders] = useState([]);
  return (
    <div className="App">
      <header>
        <h1> Reminders  </h1>
      </header>
      <Form 
      inputText={inputText} 
      reminders={reminders} 
      setReminders={setReminders} 
      setInputText={setInputText} 
      />
      <ReminderList  reminders={reminders} />
    </div>
  );
}

export default App;



