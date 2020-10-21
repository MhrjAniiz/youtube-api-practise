import React from "react";
import VideoItem from "./VideoItem";

export default function VideoList({ video, handleSelectedVideo }) {
  const list = video.map((res, i) => {
    return (
      <VideoItem
        key={i}
        handleSelectedVideo={handleSelectedVideo}
        video={res}
        title={res.snippet.title}
        thumbnails={res.snippet.thumbnails.medium.url}
      />
    );
  });
  return (
    <div className="list__body">
      {video.length > 0 ? (
        <h1>Search results!!</h1>
      ) : (
        <h1>
          Search and Go 
        </h1>
      )}
      {video.length > 0 ? (
        list
      ) : (
        <img
          className="video__gif"
          src="https://media.giphy.com/media/26BoCVdjSJOWT0Fpu/giphy.gif"
          alt="gif"
        />
      )}
    </div>
  );
}
