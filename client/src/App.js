
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Login from './components/Login';
import Heading from './components/Heading';
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] =useState([
    
    {
      id: 1,
      text: 'pochha',
      day: 'Oct 1st at 9.30am',
      reminder: true,
  },



])

//Delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => tasks.id !==id))
  }
  return (
    <>
      <Heading />
      <Navbar />
      <div className='container'>
        <div>
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'You are free to sulk!'}
        </div>
      </div>
    </>
  )
}

export default App
