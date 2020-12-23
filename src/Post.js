import React from 'react'
import { Avatar } from '@material-ui/core'
import './Post.css'
import InputOption from './InputOption'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import MailIcon from '@material-ui/icons/Mail';
export default function Post({name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar/>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
        <div className="post__body">
          <p>{message}</p>
        </div>

        <div className="post__buttons">
          <InputOption Icon={ThumbUpIcon} title="Like" color="lightgray"/>
          <InputOption Icon={InsertCommentIcon} title="Comment" color="lightgray"/>
          <InputOption Icon={SubdirectoryArrowRightIcon} title="Share" color="lightgray"/>
          <InputOption Icon={MailIcon} title="Send" color="lightgray"/>
        </div>
    </div>
  )
}
