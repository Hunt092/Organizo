
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Login from './components/Login';
<<<<<<< HEAD
import Heading from './components/Heading';
import Tasks from './components/Tasks'
=======
import Heading from './components/Heading'
import Register from './components/Register';
import Journal from './components/Journal';
import Todolist from './components/ToDoList';
>>>>>>> 7b1e4e8f2c3610cac9b36475410bee17c701739d

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
<<<<<<< HEAD
      <Navbar />
      <div className='container'>
        <div>
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'You are free to sulk!'}
        </div>
      </div>
=======
      {/* <div className='container'> */}
        {/*<div><Landingpage />
          <Login /></div>*/}
      {/* </div> */}
      <div><Navbar />
      <Todolist /></div>
>>>>>>> 7b1e4e8f2c3610cac9b36475410bee17c701739d
    </>
  )
}

export default App
