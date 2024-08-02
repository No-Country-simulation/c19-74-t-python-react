import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className='principal'>
      <h1 className='principal__mensajeError'>
        Página no encontrada
      </h1>
      <Link to="/" className='principal__mensajeError'>Volver al menú</Link>
    </div>
  )
}
