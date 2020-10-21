import React, { Component } from "react";
import axios from "./axios";
import Searchbar from "./Searchbar";
import VideoList from "./VideoList";
import { Card, CardContent } from "@material-ui/core";
import VideoDetail from "./VideoDetail";
import "./App.css";
import Navbar from "./Navbar";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      video: [],
      selectedVideo: null,
    };
  }

  handleFormSubmit = async (input) => {
    const result = await axios("/search", {
      params: {
        q: input,
      },
    });
    this.setState({
      video: result.data.items,
    });
  };

  handleSelectedVideo = (video)=>{
    this.setState({
      selectedVideo: video
    })

  }

  render() {
  
    const { video } = this.state;
    return (
      <div>
        <Navbar />
        <div className="app__bottom">
          <Card className="app__left">
            <CardContent className="app__content">
              <Searchbar handleFormSubmit={this.handleFormSubmit} />
              <VideoDetail selectedVideo={this.state.selectedVideo} />
            </CardContent>
          </Card>
          <Card className="app__right">
            <CardContent className="video__main">
              <VideoList video={video} handleSelectedVideo={this.handleSelectedVideo}/>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
