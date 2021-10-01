
import './App.css';

import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Login from './components/Login';
import Heading from './components/Heading'
import Register from './components/Register';

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
