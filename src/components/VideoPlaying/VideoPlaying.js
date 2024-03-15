import React from "react";
import React, { useEffect, useState } from "react";
import "./VideoPlaying.css";
const api_key="?api_key=777219bc-bf2e-4b39-9a97-8cefeb6d3047"

const VideoPlaying = ({videoDetailsID}) => {

  const [selectedVideo,setselectedVideo]= useState()
  useEffect(()=>{
    const getVideos=async()=>{
      try{
        const result= await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoDetailsID}${api_key}`)
        selectedVideoVideos(result.data)


      }catch(error){
        console.error(error)
    }
    }
    getVideos()
  },[videoDetailsID])

  return (
    <main className="now-playing">
      <div className="now-playing__video-holder">
        <video
          className="now-playing__main-image"
          poster={videoDetails.image}
          controls
        />
      </div>

      
    </main>
  );
};

export default VideoPlaying;
