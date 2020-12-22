import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

export default function Sidebar() {
  const recentItem = (topic) => {
    //method to return JSX
    return (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
    )
  }
  return (
    // Sidebar for left columns
    <div className="sidebar">
    {/* Top sidebar  */}
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1532587459811-f057563d1936?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1301&q=80" alt=""/>
        <Avatar className="sidebar__avatar" />
        <h2>James Vongampai</h2>
        <h4>james.vongampai@gmail.com</h4>
      </div>
      {/* Container for stats */}
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,345</p>
        </div>
        <div className="sidebar__stat">
        <p>Views on post</p>
          <p className="sidebar__statNumber">36,293</p>
        </div>
      </div>
      {/* Bottom sidebar  */}
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('reactjs')}
        {recentItem('reactjs')}
      </div>
    </div>
  )
}
