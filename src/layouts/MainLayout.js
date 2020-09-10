import React from 'react'
import './MainLayout.scss'
import Sidebar from '../components/Sidebar/Sidebar.comp'

 const MainLayout = ({ children }) => {
    return (
        <div className="root_wrapper">
            <div className="layout_main__sidebar">
                <Sidebar />
            </div>
            <div className="layout_main__content">
                { children }
            </div>
        </div>
    )
}

export default MainLayout