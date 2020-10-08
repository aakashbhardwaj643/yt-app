import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoDetails from "./VideoDetails";
import VideoList from "./VideoList";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("Pizza");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  const onSelectedVideo = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column ">
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onSelectedVideo={onSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
