import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'

export default function Homepage() {
  return (
    <div className='homepage'>
        <Link to='/user/12'>Karl 👦</Link>
        <Link to='/user/18'>Cecilia 👱‍♀️</Link>
    </div>
  )
}
