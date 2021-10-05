import { Avatar } from '@mui/material'
import React from 'react'
import avatar from './assets/avatar.jpeg';
import gradient from './assets/gradient.jpeg'
import './Sidebar.css'

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
  )

  return (
    <div className="sidebar">
    {/* sidebar top */}
      <div className="sidebar__top">
    <img src={gradient} alt="gradient" />
        <Avatar 
        alt="James Vongampai"
        src={avatar}
        sx={{width: 45, height: 45}}/>
        <h2>James Vongampai</h2>
        <h4>james.vongampai@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2453</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">3659</p>
        </div>

    {/* end sidebar top */}
    </div>
      {/* sidebar bottom */}
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('bayareajobs')}
        {recentItem('softwareengineering')}
        {recentItem('developer')}
        {recentItem('getyourfirstjob')}
      </div>
    </div>
  )
}

export default Sidebar
