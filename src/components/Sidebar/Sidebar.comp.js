import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './Sidebar.scss'

const Sidebar = () => {
    const menu = useSelector(state => state.mainReducers.menuList)
    return (
        <div className="sidebar__wrapper">
            <aside className="sidebar">
                <ul>
                    <li>
                        {
                            menu.map( menuList => {
                                return (

                                    <Link to={menuList.link}> { menuList.name } </Link>
                                )
                            })
                        }
                    </li>
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar