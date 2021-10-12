import '../styles/Navbar.css';


import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (

    <div class="vertical-menu">
      <ul className="vertical-nav-bar">
        <NavLink exact to='/' activeClassName="active">
          Dashboard
        </NavLink>
        <NavLink exact to='/journal' activeClassName="active">
          Journal
        </NavLink>
        <NavLink exact to='/todo' activeClassName="active">
          todo
        </NavLink>

      </ul>
    </div>

  )
}

export default Navbar
