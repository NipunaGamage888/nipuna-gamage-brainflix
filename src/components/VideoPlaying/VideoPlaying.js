import React from "react";
import like from '../../assets/icons/likes.svg'
import views from '../../assets/icons/views.svg'
import "./VideoPlaying.css";

const VideoPlaying = (props) => {
    const date=new Date(props.videoDetails.timestamp).toLocaleDateString()

  return (
    <main className="now-playing">
      <video className="now-playing__main-image" poster={props.videoDetails.image} controls/>
      <h2 className="now-playing__heading">
        {props.videoDetails.title}
      </h2>
      <hr className="now-playing__line" />

      <section className="now-playing__info">
        <div>
          <p className="now-playing__creator"> {props.videoDetails.channel}</p>
          <p className="now-playing__date">{date}</p>
        </div>
        <div>
          <div className="now-playing__likes">
            <img className="now-playing__image" src={views} />
            <p>{props.videoDetails.views}</p>
          </div>
          <div className="now-playing__likes">
            <img className="now-playing__image" src={like} />
            <p>{props.videoDetails.likes}</p>
          </div>
        </div>
      </section>
      <hr className="now-playing__line" />
      <article className="now-playing__article">
        <p className="now-playing__desc">
          {props.videoDetails.description}
        </p>
      </article>
    </main>
  );
};

export default VideoPlaying;
