import React from 'react'
import './Home.scss'

import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div className="home__wrapper">
            <h1> Soy el home </h1>
            <Link to="/admin/setting">La setting prro</Link>
        </div>
    )
}

export default Home