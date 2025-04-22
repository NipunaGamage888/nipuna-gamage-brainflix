import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import './commentInfo.scss'


function CommentInfo({videoDetailsID}) {

  const [selectedVideo,setselectedVideos]= useState(null)
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
