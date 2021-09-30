
import './App.css';

import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';


const App=()=>{
  return (
    <>
    <Navbar />
    <div className='container'>
      <div><Landingpage /></div>
    </div>
    </>
  )
}

export default App
