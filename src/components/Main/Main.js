import React, { useEffect, useState } from "react";
import Header from "../Header/Header.js";
import VideoPlaying from "../VideoPlaying/VideoPlaying";
import Comment from "../Comment/Comment.js";
import CommentInfo from "../CommentInfo/CommentInfo.js";
import NextVideo from "../NextVideo/NextVideo.js";
import "./main.scss";
import Videodescription from "../Videodescription/Videodescription.js";
import axios from "axios";
import { useParams } from "react-router-dom";



const Main = () => {
  const { homeId } = useParams();

  const [videos, setVideos] = useState([]);

  let firstVideo = videos.length > 0 ? videos[0].id : null;



  const selectedVideoIdfunc = () => {
    if (!homeId) {
      return firstVideo;
    } else {
      return homeId;
    }
  };

  let selectedVideoId = selectedVideoIdfunc();
  const filteredVideo = videos.filter((video) => video.id !== selectedVideoId);
  useEffect(() => {
    const getVideos = async () => {
      try {
        const result = await axios.get(
          `http://localhost:8080/api/videos`
        );
        setVideos(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    getVideos();
  }, []);

  

  return (
    <div className="main">
      <Header />
      <VideoPlaying videoDetailsID={selectedVideoId} />
      <div className="main__video">
        <div className="main__now-playing">
          <Videodescription videoDetailsID={selectedVideoId} />
          <Comment videoDetailsID={selectedVideoId} />
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
