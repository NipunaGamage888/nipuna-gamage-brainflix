import React from "react";
import image from "../../assets/images/Upload-video-preview.jpg";
import "./VideoPlaying.css";

const VideoPlaying = () => {
  return (
    <main className="now-playing">
      <video className="now-playing__main-image" poster={image} controls/>
      <h2 className="now-playing__heading">
        The Future of Artificial Inteiigence
      </h2>
      <hr className="now-playing__line" />

      <section className="now-playing__info">
        <div>
          <p className="now-playing__creator"> By Aiden Thompson</p>
          <p className="now-playing__date">8/8/2023</p>
        </div>
        <div>
          <div className="now-playing__likes">
            <img className="now-playing__image" src={image} />
            <p>980544</p>
          </div>
          <div className="now-playing__likes">
            <img className="now-playing__image" src={image} />
            <p>980544</p>
          </div>
        </div>
      </section>
      <hr className="now-playing__line" />
      <article className="now-playing__article">
        <p className="now-playing__desc">
          Explore the cutting-edge developments and predictions for Artificial
          Intelligence in the coming years. From revolutionary breakthroughs in
          machine learning to the ethical considerations influencing AI
          advancements, this exploration transcends the boundaries of mere
          speculation. Join us on a journey that navigates the intricate
          interplay between innovation, ethics, and the ever-evolving tech
          frontier.
        </p>
      </article>
    </main>
  );
};

export default VideoPlaying;
