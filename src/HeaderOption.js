import React from 'react'
import './HeaderOption.css'
// pass in props as destructured object
function HeaderOption({ Icon, title, avatar }) {
  return (
    <div className="headerOption">
      {/* Conditional rendering */}
      { Icon && <Icon className="headerOption__icon" /> }
      { avatar && <img className="headerOption__avatar" src={avatar} alt="myself-avatar"/> }
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption
