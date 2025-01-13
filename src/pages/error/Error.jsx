import React from 'react';
import './Error.css'

export default function Error() {
  return (
    <div className='error-page'>
        <h1 className='error-title'>404</h1>
        <h3 className='error-description'>Oups! La page que vous demandez n'existe pas.</h3>
    </div>
  )
}
