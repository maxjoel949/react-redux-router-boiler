import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { cambiarSaludo } from '../../actions/actionCreators'

const Main = () => {
    const dispatch = useDispatch()
    const _cambiarSaludo = useCallback(
        () => {
            dispatch(cambiarSaludo('wena prrrrrro'))
        },
        [dispatch],
    )
    return (
        <div className="main__wrapper">
            <h2> Soy el main </h2>
            <button onClick={_cambiarSaludo}> Clickeame perro </button>
        </div>
    )
}

export default Main