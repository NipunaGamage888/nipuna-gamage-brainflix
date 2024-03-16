import React, { useEffect, useState } from "react";
import Header from "../Header/Header.js";
import VideoPlaying from "../VideoPlaying/VideoPlaying";
import Comment from "../Comment/Comment.js";
import CommentInfo from "../CommentInfo/CommentInfo.js";
import NextVideo from "../NextVideo/NextVideo.js";
import "./main.css";
import Videodescription from "../Videodescription/Videodescription.js";
import axios from "axios";
import { useParams } from "react-router-dom";

const api_key="?api_key=777219bc-bf2e-4b39-9a97-8cefeb6d3047"


const Main = () => {

  const {homeId}=useParams({})
  const [videos, setVideos] = useState([]);
  

 
  let defaultVideoId =videos.length>0 ? videos[0].id :null


  let selectedVideoId= homeId ?? defaultVideoId;
  const filteredVideo = videos.filter((video) => video.id !== selectedVideoId);

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


  
  return (
    <div className="main">
      <Header />
      <VideoPlaying videoDetailsID={selectedVideoId} />
      <div className="main__video">
        <div className="main__now-playing">
          <Videodescription videoDetailsID={selectedVideoId} />
          <Comment />
          <CommentInfo videoDetailsID={selectedVideoId} />
        </div>
        <div className="main__next">
          <NextVideo videos={filteredVideo} />
        </div>
      </div>
    </div>
  );
};

export default Main;
