// ruchita commited just now

import logo from './logo.svg';
import './App.css';

import Sidebar from './components/Sidebar';
import Landingpage from './components/Landingpage';
import Login from './components/Login';


const App=()=>{
  return (
    <i className='containerr'>
    <Sidebar />
    <div className='container'>
      <div><Landingpage />
      <Login /></div>
    </div>
    </i>
  )
}

export default App
