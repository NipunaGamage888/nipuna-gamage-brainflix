import React from 'react'
import like from "../../assets/images/icons/likes.svg";
import views from "../../assets/images/icons/views.svg";
import './videodescription.css'

function Videodescription(props) {
    const date = new Date(props.videoDetails.timestamp).toLocaleDateString();
  return (
    <div className='now-playing'>
      <h1 className="now-playing__heading">{props.videoDetails.title}</h1>
      <hr className="now-playing__line" />

      <section className="now-playing__info">
        <div className="now-playing__creator-details">
          <p className="now-playing__creator"> {props.videoDetails.channel}</p>
          <p className="now-playing__date">{date}</p>
        </div>
        <div className="now-playing__popular">
          <div className="now-playing__views-sec">
            <img alt='icon of views' className="now-playing__image" src={views} />
            <p className="now-playing__views">{props.videoDetails.views}</p>
          </div>
          <div className="now-playing__likes-sec">
            <img alt='icon of likes' className="now-playing__image" src={like} />
            <p className="now-playing__likes">{props.videoDetails.likes}</p>
          </div>
        </div>
      </section>
      <hr className="now-playing__line-2" />
      <article className="now-playing__article">
        <p className="now-playing__desc">{props.videoDetails.description}</p>
      </article>
    </div>
  )
}

export default Videodescription
