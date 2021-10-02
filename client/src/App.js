
import './App.css';

import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Login from './components/Login';
import Heading from './components/Heading'
import Register from './components/Register';
import Journal from './components/Journal';
import Todolist from './components/ToDoList';

const App = () => {
  return (
    <>
      <Heading />
      {/* <div className='container'> */}
        {/*<div><Landingpage />
          <Login /></div>*/}
      {/* </div> */}
      <div><Navbar />
      <Todolist /></div>
    </>
  )
}

export default App
