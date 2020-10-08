import React from "react";

const VideoItem = ({ video, onSelectedVideo }) => {
  return (
    <div onClick={() => onSelectedVideo(video)} className="ui list">
      <div
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        className="item"
      >
        <img
          style={{ maxWidth: "180px" }}
          className="ui image"
          alt={video.snippet.title}
          src={video.snippet.thumbnails.medium.url}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
