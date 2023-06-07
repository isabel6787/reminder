import React  from "react";

import Reminder from "./Reminder";

const Form = ({ setInputText, reminders, setReminders, inputText}) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText (e.target.value);
  };
  const submitRemiderHander = (e) => {
    e.preventDefault();
    setReminders([void
    reminders, {inputText, completed: false, id: Math.random() *1000}
    ]);
    setInputText("");
  };
    return(
        <form>
      <input value={inputText}  onChange={inputTextHandler} type="text" className="Reminder-input" />
      <button onClick={submitRemiderHander} className="Reminder-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="Reminders" className="filter-Reminder">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}

export default Form