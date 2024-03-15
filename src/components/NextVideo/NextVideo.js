import React from "react";
import "./nextvideo.css";
import { Link } from "react-router-dom";

function NextVideo({ videos }) {
  return (
    <section className="videos">
      <h3 className="videos__heading">Next Videos</h3>
      <div className="videos__map">
        {videos.map((video) => {
          return (
            <Link to={`/home/${video.id}`}
                key={video.id}
                className="videos__button"
              >
                <img
                  className="videos__image"
                  alt="Images of next videos you can watch"
                  src={video.image}
                />
                <div className="videos__info">
                  <p className="videos__title">{video.title}</p>
                  <p className="videos__channel">{video.channel}</p>
                </div>
              
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default NextVideo;
