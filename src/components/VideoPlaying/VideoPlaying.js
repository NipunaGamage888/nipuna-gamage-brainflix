import React from "react";
import like from "../../assets/icons/likes.svg";
import views from "../../assets/icons/views.svg";
import "./VideoPlaying.css";

const VideoPlaying = (props) => {
  const date = new Date(props.videoDetails.timestamp).toLocaleDateString();

  return (
    <main className="now-playing">
      <div className="now-playing__video-holder">
        <video
          className="now-playing__main-image"
          poster={props.videoDetails.image}
          controls
        />
      </div>

      <h2 className="now-playing__heading">{props.videoDetails.title}</h2>
      <hr className="now-playing__line" />

      <section className="now-playing__info">
        <div className="now-playing__creator-details">
          <p className="now-playing__creator"> {props.videoDetails.channel}</p>
          <p className="now-playing__date">{date}</p>
        </div>
        <div className="now-playing__popular">
          <div className="now-playing__views-sec">
            <img className="now-playing__image" src={views} />
            <p className="now-playing__views">{props.videoDetails.views}</p>
          </div>
          <div className="now-playing__likes-sec">
            <img className="now-playing__image" src={like} />
            <p className="now-playing__likes">{props.videoDetails.likes}</p>
          </div>
        </div>
      </section>
      <hr className="now-playing__line-2" />
      <article className="now-playing__article">
        <p className="now-playing__desc">{props.videoDetails.description}</p>
      </article>
    </main>
  );
};

export default VideoPlaying;
