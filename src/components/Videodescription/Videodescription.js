import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import likeimg from "../../assets/images/icons/likes.svg";
import views from "../../assets/images/icons/views.svg";
import "./videodescription.scss";

function Videodescription({ videoDetailsID }) {
  const [selectedVideo, setselectedVideos] = useState(null);
   const [like, setLike] = useState();

  useEffect(()=>{
    const getVideos=async()=>{
      if(videoDetailsID){
        try{
          const result= await axios.get(`http://localhost:8080/api/videos/${videoDetailsID}`)
          setselectedVideos(result.data)
  
        }catch(error){
          console.error(error)
      }
      }

      }
      getVideos()
  },[videoDetailsID])
  if (!selectedVideo) {
    return <p>Loading</p>;
  }
 

  const updateLike = async () => {
      try {
          const response = await axios.put(`http://localhost:8080/videos/${videoDetailsID}/likes`);
          setLike(response.data.likes);
      } catch (error) {
          console.error("Error liking video:", error);
      }
  };

  const date = new Date(selectedVideo.timestamp).toLocaleDateString();
  return (
    <div className="now-playing">
      <h1 className="now-playing__heading">{selectedVideo.title}</h1>
      <hr className="now-playing__line" />

      <section className="now-playing__info">
        <div className="now-playing__creator-details">
          <p className="now-playing__creator"> {selectedVideo.channel}</p>
          <p className="now-playing__date">{date}</p>
        </div>
        <div className="now-playing__popular">
          <div className="now-playing__views-sec">
            <img
              alt="icon of views"
              className="now-playing__image"
              src={views}
            />
            <p className="now-playing__views">{selectedVideo.views}</p>
          </div>
          <div className="now-playing__likes-sec">
            <img
              alt="icon of likes"
              className="now-playing__image"
              src={likeimg}
            />
            <p onClick={updateLike} className="now-playing__likes">{selectedVideo.likes}</p>
          </div>
        </div>
      </section>
      <hr className="now-playing__line-2" />
      <article className="now-playing__article">
        <p className="now-playing__desc">{selectedVideo.description}</p>
      </article>
    </div>
  );
}

export default Videodescription;
