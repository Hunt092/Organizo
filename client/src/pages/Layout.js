import React from 'react'
import AddToDoList from '../components/AddToDoList'
import Navbar from '../components/Navbar'

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            {children}
        </div>
    )
}

export default Layout
