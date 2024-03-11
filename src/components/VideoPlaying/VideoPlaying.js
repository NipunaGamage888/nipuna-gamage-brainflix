import React from "react";
import like from "../../assets/icons/likes.svg";
import views from "../../assets/icons/views.svg";
import "./VideoPlaying.css";

const VideoPlaying = (props) => {
  const date = new Date(props.videoDetails.timestamp).toLocaleDateString();

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
