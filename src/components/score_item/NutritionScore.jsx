import React from 'react'
import './NutritionScore.css'

export default function ScoreItem({ item, icon, name }) {
    return (
        <div className='card'>
            <img src={icon} alt="icon" />
            <div className='card-description'>
                <h3>{item}</h3>
                <p>{name}</p>
            </div>

        </div>
    )
}
