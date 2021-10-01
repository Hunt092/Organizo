
import './App.css';

import Navbar from './Components/Navbar';
import Landingpage from './Components/Landingpage';
import Login from './Components/Login';
import Heading from './Components/Heading'

const App = () => {
  return (
    <>
      <Heading />
      <Navbar />
      <div className='container'>
        <div><Landingpage />
          <Login /></div>
      </div>
    </>
  )
}

export default App
