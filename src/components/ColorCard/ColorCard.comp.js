import React from 'react'
import './ColorCard.scss'

const ColorCard = ({ title, description, style}) => {
    return (
        <div className="color_card__wrapper" style={style}>
            <div className="color_card__title">
                { title ? title : 'NO DATA' }
            </div>
            <div className="color_card__description">
                { description ? description : 'NO DATA' }
            </div>"
        </div>
    )
}

export default ColorCard