import React from 'react'
import './NutritionScore.css'

export default function ScoreItem({ item, icon, name, measure }) {
    return (
        <div className='card'>
            <img src={icon} alt="icon" />
            <div className='card-description'>
                <p className='card-mesure'>{item}{measure}</p>
                <p>{name}</p>
            </div>

        </div>
    )
}
