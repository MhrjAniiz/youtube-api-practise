import React from "react";
import Avatar from "@material-ui/core/Avatar";
import './videos.css'

export default function Videos({
  image,
  avatar,
  title,
  channel,
  views,
  timestamp,
}) {
  return (
    <div className="video-body">
      <img src={image} alt="mainimage" />
      
          <div className="video-avatar">
              <Avatar src={avatar} alt="avatarpic" />
              
              <div className="video-text">
        <h3>{title}</h3>
        <p>{channel}</p>
        <p>
          {views} . {timestamp}
        </p> 
              </div>
       
      </div>
    </div>
  );
}
