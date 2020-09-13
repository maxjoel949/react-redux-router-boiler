import React from 'react'
import './MainLayout.scss'
import Sidebar from '../components/Sidebar/Sidebar.comp'
import HeaderBar from '../components/HeaderBar/HeaderBar.comp'

 const MainLayout = ({ children }) => {
    return (
        <div className="root_wrapper">
            <div className="layout_main__sidebar">
                <Sidebar />
            </div>
            <div className="layout_main__content">
                <div className="layout__main__statusbar">
                    <HeaderBar />                    
                </div>
                <div className="layout_main__main">
                    { children }
                </div>
            </div>
        </div>
    )
}

export default MainLayout