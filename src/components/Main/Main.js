import React, { useState } from 'react'
import Header from '../Header/Header.js'
import VideoPlaying from '../VideoPlaying/VideoPlaying'
import videoDetails from '../../assets/data/video-details.json'
import videos from '../../assets/data/videos.json'
import Comment from '../Comment/Comment.js'
import CommentInfo from '../CommentInfo/CommentInfo.js'


const Main = () => {

    const[comments,setComments]=useState(videos)
    const [selectedVideo, setselectedVideo]=useState(videoDetails[0])
  return (
    <>
        <Header/>
        <VideoPlaying videoDetails={selectedVideo}/>
        <Comment/>
        <CommentInfo videoDetails={selectedVideo}/>
    </>
  )
}

export default Main