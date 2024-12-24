import React from 'react'
import './Button.css'

export default function Button({ icon }) {
  return (
    <div className='button'>
        <img src={icon} alt="icon" />
    </div>
  )
}
