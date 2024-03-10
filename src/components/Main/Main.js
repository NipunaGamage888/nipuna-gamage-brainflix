import React, { useState } from 'react'
import Header from '../Header/Header.js'
import VideoPlaying from '../VideoPlaying/VideoPlaying'
import videoDetails from '../../assets/data/video-details.json'
import videos from '../../assets/data/videos.json'
import Comment from '../Comment/Comment.js'
import CommentInfo from '../CommentInfo/CommentInfo.js'
import NextVideo from '../NextVideo/NextVideo.js'
import './main.css'
// {

//   "id": "84e96018-4022-434e-80bf-000ce4cd12b8",
//   "title": "The Future of Artificial Intelligence",
//   "channel": "Aiden Thompson",
//   "image": "https://unit-3-project-api-0a5620414506.herokuapp.com/images/image0.jpg"
// },

const Main = () => {

    const[video,setVideos]=useState(videos)
    const [selectedVideo, setselectedVideo]=useState(videoDetails[0])

    const selectedVideoHandler=(click)=>{
      const wantVideo=videoDetails.find((video)=>click=== video.id)
      setselectedVideo(wantVideo)
    }

    const filteredVideo = videos.filter((video)=> video.id !==selectedVideo.id)
  return (
    <div className='main'>
        <Header/>
        <VideoPlaying videoDetails={selectedVideo}/>
        <Comment/>
        <CommentInfo videoDetails={selectedVideo}/>
        <NextVideo wantVideo={selectedVideoHandler} videos={filteredVideo}/>
    </div>
  )
}

export default Main