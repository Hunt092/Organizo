
import './App.css';

import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Login from './components/Login';
import Heading from './components/Heading'

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
