import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelectedVideo }) => {
  const renderedItems = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onSelectedVideo={onSelectedVideo}
        video={video}
      />
    );
  });

  return <div>{renderedItems}</div>;
};

export default VideoList;
