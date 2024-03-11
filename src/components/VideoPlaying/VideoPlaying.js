import React from "react";

import "./VideoPlaying.css";

const VideoPlaying = (props) => {
  

  return (
    <main className="now-playing">
      <div className="now-playing__video-holder">
        <video
          className="now-playing__main-image"
          poster={props.videoDetails.image}
          controls
        />
      </div>

      
    </main>
  );
};

export default VideoPlaying;
