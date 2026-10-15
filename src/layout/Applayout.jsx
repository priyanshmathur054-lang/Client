import React from 'react'
import { NavLink, Outlet } from 'react-router'


function Applayout () {
    const[isAppReady,updateAppStatus]=React.useState(false)
    setTimeout(() => {
        updateAppStatus(true)

    }, 1.5 * 1000);

    if(!isAppReady)
    {
        return(
        <div>
            Page is Loading
        </div>
     
        );
    }

    return (
    <div>
        <header>HEADER</header>
        <nav>
            <ul>
                <li><NavLink to={"/"}> Dashboard </NavLink></li>
                <li><NavLink to={"/student"}> Student </NavLink></li>
                <li><NavLink to={"/teacher"}>Teacher</NavLink></li>
                <li><NavLink to={"/staff"}>Staff</NavLink></li>
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