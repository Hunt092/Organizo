import '../styles/Navbar.css';


import React from 'react'

function Navbar() {
  return (

    <div class="vertical-menu">
      <ul className = "Vertical Nav Bar">
      <li><a className ="active" href="#">Dashboard</a></li>
       <li><a href="#">Journal</a></li>
       <li><a href="#">To-Do List</a></li>
      </ul>
    </div>
      
  )
}

export default Navbar
