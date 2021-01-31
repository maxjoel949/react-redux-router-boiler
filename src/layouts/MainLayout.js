import React from 'react'
import './MainLayout.scss'

 const MainLayout = ({ children }) => {
    return (
        <div className="root_wrapper">
            <div className="layout_main__sidebar">
            </div>
            <div className="layout_main__content">
                <div className="layout__main__statusbar">
                </div>
                <div className="layout_main__main">
                    { children }
                </div>
            </div>
        </div>
    )
}

export default MainLayout