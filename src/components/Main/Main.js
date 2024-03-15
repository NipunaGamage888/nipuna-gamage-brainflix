import React, { useEffect, useState } from "react";
import Header from "../Header/Header.js";
import VideoPlaying from "../VideoPlaying/VideoPlaying";
import videoDetails from '../../data/video-details.json'
import Comment from "../Comment/Comment.js";
import CommentInfo from "../CommentInfo/CommentInfo.js";
import NextVideo from "../NextVideo/NextVideo.js";
import "./main.css";
import Videodescription from "../Videodescription/Videodescription.js";
import axios from "axios";
import { useParams } from "react-router-dom";

const api_key="?api_key=777219bc-bf2e-4b39-9a97-8cefeb6d3047"


const Main = () => {
  const [videos, setVideos] = useState([]);
  

  const {homeId}=useParams({})
  let defaultVideo =null

  if(videos.length > 0){
    
  }

  useEffect(()=>{
    const getVideos=async()=>{
      try{
        const result= await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos${api_key}`)
        setVideos(result.data)


      }catch(error){
        console.error(error)
    }
    }
    getVideos()
  },[])
  
  // const selectedVideoHandler = (click) => {
  //   const wantVideo = videos.find((video) => click === wantedVideoID);
  //   setselectedVideo(wantVideo);
  // };

  const filteredVideo = videos.filter((video) => video.id !== selectedVideo.id);
  return (
    <div className="main">
      <Header />
      <VideoPlaying videoDetails={selectedVideo} />
      <div className="main__video">
        <div className="main__now-playing">
          <Videodescription videoDetailsID={selectedVideo} />
          <Comment />
          <CommentInfo videoDetailsID={selectedVideo} />
        </div>
        <div className="main__next">
          <NextVideo videos={filteredVideo} />
        </div>
      </div>
    </div>
  );
};

export default Main;
