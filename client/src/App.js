
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Login from './components/Login';
import Heading from './components/Heading'
import Register from './components/Register';
import Journal from './components/Journal';
import TodoList from './components/ToDoList';
import AddToDoList from './components/AddToDoList';

  const App = () => {
  return (
    <>
      <Heading />
      {/* <div className='container'> */}
        {/*<div><Landingpage />
          <Login /></div>*/}
      {/* </div> */}
      <div><Navbar />
      <AddToDoList/></div>
    </>
  )
}

export default App
