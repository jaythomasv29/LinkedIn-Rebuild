import React from 'react'
import './HeaderOption.css'
// Reusable component
// Function takes in properties
function HeaderOption ({Icon, title}) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />} {/* Conditional rendering to load Icon from Material UI*/}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption