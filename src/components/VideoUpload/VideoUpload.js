import React from "react";
import Header from "../Header/Header";
import uploader from "../../assets/images/Upload-video-preview.jpg";
import Button from "../Button/Button";
import buttonImage from "../../assets/images/icons/upload.svg";
import { Link, Navigate } from "react-router-dom";
import './Videoupload.scss'

function VideoUpload() {
  const uploadAlert = () => {
    alert("Your Video Uploaded");
  };

  return (
    <section className="video-upload">
      <Header />
      <hr className="video-upload__hr"/>
      <div className="video-upload__main">
        <h1 className="video-upload__heading">Upload Video</h1>
        <hr className="video-upload__hrs"/>
        <section className="video-upload__section">
          <div className="video-upload__image-sec">
            <h3 className="video-upload__img-heading">Video Thumbnail</h3>
            <img className="video-upload__image" src={uploader} />
          </div>
          <form className="video-upload__form">
            <label className="video-upload__label">TITLE YOUR VIDEO</label>
            <input className="video-upload__input" placeholder="Add a Title to your Video" />
            <label className="video-upload__label">ADD A DESCRIPTION</label>
            <textarea className="video-upload__input" placeholder="ADD A DESCRIPTION TO YOUR VIDEO" />
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
