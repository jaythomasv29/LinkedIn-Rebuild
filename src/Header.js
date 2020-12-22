import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img 
        src="https://www.flaticon.com/svg/static/icons/svg/124/124011.svg"
        alt="li-logo"
        />
        <div className="header__search">
          <SearchIcon/>
          <input 
          type="text"
          placeholder="Search"
          />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOption Icon={ChatIcon} title="Messaging"/>
        <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOption avatar="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/85145626_10158202957482122_4245270779173797888_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=iCsymoNs1RwAX-O2ojy&_nc_ht=scontent-sjc3-1.xx&oh=066021bef54d5428d2e26a86d95476a6&oe=600606A7" title="me" />
        
      </div>
    </div>
  )
}
