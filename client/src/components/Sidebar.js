import React from 'react'

const Sidebar = () => {
    return (
        <div>
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                <a href="#">Journal</a>
                <a href="#">To-Do List</a>
                <a href="#">Custom List</a>
                </div>

                <span onclick="openNav()">open</span>
                <div id="main">
            </div>
        </div>
    )
}

export default Sidebar;
