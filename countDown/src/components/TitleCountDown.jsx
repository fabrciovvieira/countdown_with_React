// REACT
import React from 'react'

// ESTILOS
import './TitleCountDown.css'


const TitleCountDown = ({ title, eventColor }) => {
  return (
    <h1 className='title' style={{color: eventColor}}>{title}</h1>

  )
}

export default TitleCountDown