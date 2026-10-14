import React from 'react'
import { NavLink, Outlet } from 'react-router'
import Dashboardscreen from '../screen/Dashboardscreen'

function Applayout() {
    return (<div>
        <header>HEADER</header>
        <nav>
            <ul>
                <li><NavLink to={"/"}> Dashboard </NavLink></li>
                <li><NavLink to={"/student"}> Student </NavLink></li>
                <li>Teacher</li>
                <li>Staff</li>
            </ul>
        </nav>
        <main>
            <Outlet />
        </main>
        <footer>Footer</footer>
    </div>
    )
}

export default Applayout