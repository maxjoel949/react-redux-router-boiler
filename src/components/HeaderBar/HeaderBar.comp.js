import React from 'react'
import { RiSettings5Fill } from "react-icons/ri";

import './HeaderBar.scss'

const HeaderBar = () => {
    return (
        <nav className="headerbar__wrapper">
            <div className="headerbar__welcome">
                Bienvenido USERNAME
            </div>
            <div className="headerbar__sidemenu">
               <RiSettings5Fill />
            </div>
        </nav>
    )
}

export default HeaderBar