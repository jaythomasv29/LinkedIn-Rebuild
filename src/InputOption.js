import './InputOption.css'
import React from 'react'

export default function InputOption( {Icon, title, color } ) {
  return (
    <div className="inputOption">
       <Icon style={{ color: color }}className="inputOption__icon" /> 
      <h4 className="inputOption__title">{title}</h4>
    </div>
  )
}
