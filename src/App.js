import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";


function App() {

  const [tasks, setTasks] = useState([
    {
      id: '1',
      text: 'Doctors Appointment',
      day: 'Jan 19th at 9pm',
      reminder: true,
    },
    {
      id: '2',
      text: 'Shopping',
      day: 'Jan 20th at 9am',
      reminder: false,
    },
    {
      id: '3',
      text: 'School',
      day: 'Jan 21th at 8am',
      reminder: true,
    }
  ]);

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // TOGGLE REMINDER
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
  }
  return (  
    <div className="container">
      <Header title='Hello' />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
