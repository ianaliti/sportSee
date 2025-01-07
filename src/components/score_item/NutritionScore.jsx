import React from 'react'
import './NutritionScore.css'

export default function ScoreItem({ item, icon, name, measure }) {
    return (
        <div className='card'>
            <img src={icon} alt="icon" />
            <div className='card-description'>
                <h2>{item}{measure}</h2>
                <p>{name}</p>
            </div>

        </div>
    )
}
