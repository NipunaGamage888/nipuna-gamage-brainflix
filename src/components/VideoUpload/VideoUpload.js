import React from "react";
import Header from "../Header/Header";
import uploader from "../../assets/images/Upload-video-preview.jpg";
import Button from "../Button/Button";
import buttonImage from "../../assets/images/icons/upload.svg";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./VideoUpload.scss";
import { useState } from "react";
import axios from "axios";

function VideoUpload() {


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const uploadAlert = async (event) => {
    event.preventDefault()
    try {
      await axios.post(`http://localhost:8080/api/videos`, {
        title,
        description,
      });
    
      alert("Your Video Uploaded");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="video-upload">
      <Header />
      <hr className="video-upload__hr" />
      <div className="video-upload__main">
        <h1 className="video-upload__heading">Upload Video</h1>
        <hr className="video-upload__hrs" />
        <section className="video-upload__section">
          <div className="video-upload__image-sec">
            <h3 className="video-upload__img-heading">Video Thumbnail</h3>
            <img alt="I don't know what" className="video-upload__image" src={uploader} />
          </div>
          <form className="video-upload__form">
            <label className="video-upload__label">TITLE YOUR VIDEO</label>
            <input
              className="video-upload__input"
              placeholder="Add a Title to your Video"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="video-upload__label">ADD A DESCRIPTION</label>
            <textarea
              className="video-upload__input-text"
              placeholder="ADD A DESCRIPTION TO YOUR VIDEO"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="video-upload__button-sec">
              <div className="video-upload__button" onClick={uploadAlert}>
                <Button buttonName="PUBLISH" image={buttonImage} />
              </div>
              <Link to="/">
                <p className="video-upload__cancel">Cancel</p>
              </Link>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
}

export default VideoUpload;
