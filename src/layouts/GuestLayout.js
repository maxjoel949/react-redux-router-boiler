import React from 'react'

 const GuestLayout = ({ children }) => {
    return (
        <div className="root_wrapper">
            <ul>
                <li>Hola</li>
            </ul>
            <div className="guest__wrapper">
                { children }
            </div>
        </div>
    )
}

export default GuestLayout