import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

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
        
      </div>
    </div>
  )
}
