import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';

import React, { useState } from 'react';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ViewDayIcon from '@material-ui/icons/ViewDay';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import Post from './Post';



export default function Feed() {
  const [posts, setPosts] = useState([]); // react hooks useState
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon /> {/* material ui icon */}
          <form>
            <input type="text"/>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          
          <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9"/>
          <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E"/>
          <InputOption Icon={BusinessCenterIcon} title='Job' color="#A19C5B"/>
          <InputOption Icon={ViewDayIcon} title='Write article' color="#7FC15E"/>
        </div>
      </div>
      
      {/* Posts */}
      {posts.map(posts => <Post />)}

      <Post name="James Vongampai" description="description" message="mssssg" photoUrl="#"/>
      
    </div>
  )
}
