import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import like from "../../assets/images/icons/likes.svg";
import views from "../../assets/images/icons/views.svg";
import "./videodescription.scss";

const api_key = "?api_key=777219bc-bf2e-4b39-9a97-8cefeb6d3047";
function Videodescription({ videoDetailsID }) {
  const [selectedVideo, setselectedVideos] = useState(null);
  console.log(selectedVideo);
  useEffect(() => {
    const getVideos = async () => {
      if (videoDetailsID) {
        try {
          const result = await axios.get(
            `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoDetailsID}${api_key}`
          );
          setselectedVideos(result.data);
        } catch (error) {
          console.error(error);
        }
      }
      
    };
    getVideos();
  }, [videoDetailsID]);
  if (!selectedVideo) {
    return <p>Loading</p>;
  }

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
              src={like}
            />
            <p className="now-playing__likes">{selectedVideo.likes}</p>
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
