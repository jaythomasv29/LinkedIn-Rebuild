import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';

import React, { useEffect, useState } from 'react';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ViewDayIcon from '@material-ui/icons/ViewDay';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import Post from './Post';
import { db } from './firebase'
import firebase from 'firebase'

export default function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]); // react hooks useState

  useEffect(() => { //useEffect hook to fire off code when feed component loads or re-renders
    db.collection("posts").onSnapshot((snapshot) => 
      setPosts(snapshot.docs.map((doc) => (
        { // implicit return to return an object
            id: doc.data.id,
            data: doc.data(),
        }))
      )
    )
  }, [])
  const sendPost = e => {
    e.preventDefault(); // prevent the default behavior to stop refreshing

    db.collection('posts').add({
      name: 'James Vongampai',
      description: 'This is a test',
      message: input,
      photoURL: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),  // server time stamp
    })

    setInput("");
  }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon /> {/* material ui icon */}
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          
          <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9"/>
          <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E"/>
          <InputOption Icon={BusinessCenterIcon} title='Job' color="#A19C5B"/>
          <InputOption Icon={ViewDayIcon} title='Write article' color="#7FC15E"/>
        </div>
      </div>
      
      
      {posts.map(({ id, data: { name, description, message, photoUrl } } ) => (
        <Post
          key = {id}
          name = {name}
          description = {description}
          message={message}
          photoUrl={photoUrl}
        />

      ))}

      <Post name="James Vongampai" description="description" message="mssssg" photoUrl="#"/>
      
    </div>
  )
}
