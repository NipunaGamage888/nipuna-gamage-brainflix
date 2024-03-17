import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import './commentInfo.scss'
const api_key = "?api_key=777219bc-bf2e-4b39-9a97-8cefeb6d3047";

function CommentInfo({videoDetailsID}) {
  
  const [selectedVideo,setselectedVideos]= useState(null)
  console.log(selectedVideo)
  useEffect(()=>{
    const getVideos=async()=>{
      if(videoDetailsID){
        try{
          const result= await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoDetailsID}${api_key}`)
          setselectedVideos(result.data)
  
  
        }catch(error){
          console.error(error)
      }
      }

      }
      getVideos()
  },[videoDetailsID])
  if (!selectedVideo) {
		return (
			<p>Loading</p>
		)
	}

  return (
    <section className="comments-info">
      {selectedVideo.comments.map((videoDetail) => {
        return (
    
            <section className="comments-info__details" key={videoDetail.id}>
              <hr className='comments-info__hr' />
              <div className='comments-info__comment-detail'>
                <div className='comments-info__person'>
                  <div className='comments-info__profile-pic'></div>
                  <h3 className='comments-info__name'>{videoDetail.name}</h3>
                </div>
                <p className='comments-info__date'>{new Date(videoDetail.timestamp).toLocaleDateString()}</p>
              </div>
              <p className='comments-info__comment'>{videoDetail.comment}</p>
              
            </section>
        );
      })}
    </section>
  );
}

export default CommentInfo;
