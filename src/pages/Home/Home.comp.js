import React from 'react'
import { useSelector } from 'react-redux'
import './Home.scss'

import { Link } from 'react-router-dom'

const Home = (props) => {
    console.log(useSelector(state => state))
    const hola = useSelector(state => state.HomeReducer.hola)
    return (
        <div className="home__wrapper">
            <h1> Soy el home { hola } </h1>
            <Link to="/admin/setting">La setting prro</Link>
        </div>
    )
}

export default Home