import React from 'react'
import { useSelector } from 'react-redux'
import './Home.scss'

import { Link } from 'react-router-dom'
import ColorCard from '../../components/ColorCard/ColorCard.comp'

const Home = (props) => {
    console.log(useSelector(state => state))
    const hola = useSelector(state => state.HomeReducer.hola)
    return (
        <div className="home__wrapper">
            <h1> Soy el home { hola } </h1>
            <Link to="/admin/setting">La setting prro</Link>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <ColorCard title={'30'} description={'Artículos Creados'} style={{ width: '33.33%', maxWidth: '400px' }} />
                <ColorCard title={'30'} description={'Artículos Creados'} style={{ width: '33.33%', maxWidth: '400px' }} />
                <ColorCard title={'30'} description={'Artículos Creados'} style={{ width: '33.33%', maxWidth: '400px' }} />

            </div>
        </div>
    )
}

export default Home