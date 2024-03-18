import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./VideoPlaying.scss";
const api_key = "?api_key=777219bc-bf2e-4b39-9a97-8cefeb6d3047";

const VideoPlaying = ({ videoDetailsID }) => {
  const [selectedVideo, setselectedVideos] = useState(null);
  console.log(selectedVideo);
  useEffect(() => {
    const getVideos = async () => {
      if (videoDetailsID) {
        try {
          const result = await axios.get(
            `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoDetailsID}${api_key}`
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
  console.log(selectedVideo)
  return (
    <main className="now-playing">
      <div className="now-playing__video-holder">
        <video
         className="now-playing__main-image"
          poster={selectedVideo.image}
          controls
        />
      </div>
    </main>
  );
};

export default VideoPlaying;
