import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

import logo from './assets/linkedinlogo.svg';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import avatar from './assets/avatar.jpeg';

function Header() {
  return (
    <div className="header">
      {/* header container */}
      <div className="header__left">
        {/* left section */}
        {/* ;ogo */}
        <img src={logo} alt="linkedin-rebuilt" />
        {/* input:text - Search field */}
        
        <div className="header__search">
          {/* SearchIcon */}
          <SearchIcon />
          <input type="text" name="search" id="search" placeholder="Search"/>

        </div>
      </div>
      <div className="header__right">
        {/* right section Navbar  */}
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOption Icon={InsertCommentIcon} title="Messaging"/>
        <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOption avatar={avatar} title="Me"/>
      </div>
      {/* end headercontainer */}       
      </div>
  )
}

export default Header
