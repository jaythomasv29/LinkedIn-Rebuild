import { Avatar } from '@material-ui/core'
import React from 'react'
import './HeaderOption.css'
// Reusable component
// Function takes in properties
function HeaderOption ({avatar, Icon, title}) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />} {/* Conditional rendering to load Icon from Material UI*/}
      { avatar && (
        <Avatar className="headerOption__icon" src={avatar}/> //{/* contitional rendering to load the avatar */}
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption