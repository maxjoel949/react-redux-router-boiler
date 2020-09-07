import React from 'react'

 const MainLayout = ({ children }) => {
    return (
        <div className="root_wrapper">
            <ul>
                <li>Chao</li>
            </ul>
            <div className="guest__wrapper">
                { children }
            </div>
        </div>
    )
}

export default MainLayout