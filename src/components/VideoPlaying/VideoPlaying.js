import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./VideoPlaying.scss";


const VideoPlaying = ({ videoDetailsID }) => {
  const [selectedVideo, setselectedVideos] = useState(null);

  useEffect(() => {
    const getVideos = async () => {
      if (videoDetailsID) {
        try {
          const result = await axios.get(
            `http://localhost:8080/api/videos/${videoDetailsID}`
          );
          setselectedVideos(result.data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    getVideos();
  }, [videoDetailsID]);
  if (!selectedVideo) {
    return <p>Loading</p>;
  }
  return (
    <main className="now-playing">
      <div className="now-playing__video-holder">
        <video
          src={selectedVideo.video}
          className="now-playing__main-image"
          poster={selectedVideo.image}
          controls
        />
      </div>
    </main>
  );
};

export default VideoPlaying;
