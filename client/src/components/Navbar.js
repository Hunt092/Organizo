
import '../styles/Navbar.css';
import React from 'react'

function Navbar() {
  return (

    <div class="vertical-menu">
      <ul className="Vertical Nav Bar">
        <li className="active">Dashboard</li>
        <li>Journal</li>
        <li>To-Do List</li>
      </ul>
    </div>

  )
}

export default Navbar
