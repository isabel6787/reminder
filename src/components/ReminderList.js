import React from "react";
import Reminder from "./Reminder";

const ReminderList  = ({reminders}) => {
    
    return (
        <div className="reminder-container">
            <ul className="reminder-list">
            {reminders.map((reminder) => (
                    <Reminder text={reminder,text}/>
                ))};
            </ul>
        </div>
    );
};

export default ReminderList