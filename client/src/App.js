// ruchita commited just now

import logo from './logo.svg';
import './App.css';

import Sidebar from './components/Sidebar';
import Landingpage from './components/Landingpage';


const App=()=>{
  return (
    <>
    <Sidebar />
    <div className='container'>
      <div><Landingpage /></div>
    </div>
    </>
  )
}

export default App
