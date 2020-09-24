import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";


export default class Header extends Component {
  constructor(){
    super()
    this.state = {
      searchInfo :''
    
    }
  }
  handleChange=(event)=>{
    this.setState({
      searchInfo: event.target.value
    })

  }
  render() {
    
    return (
      <div>
        <div className="header">
          <div className="header-left">
            <MenuSharpIcon />
            <Link to="/">
              <img
                className="header__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg"
                alt=" logo"
              />
            </Link>
          </div>

          <div className="header-input">
            <input type="text"  onChange={this.handleChange} placeholder="search" />
            <Link to={`/result/${this.state.searchInfo}`}>
              <SearchSharpIcon className="header-button" />
             
              </Link>
             
            
          </div>

          <div className="header-right">
            <VideoCallSharpIcon className="header-icon" />
            <AppsSharpIcon className="header-icon" />
            <NotificationsSharpIcon className="header-icon" />
            <Avatar
              src="https://www.facebook.com/MemesCasmOfficial/photos/a.975481525949526/1700367586794246/"
              alt="profile"
            />
          </div>
        </div>
      </div>
    );
  }
}
