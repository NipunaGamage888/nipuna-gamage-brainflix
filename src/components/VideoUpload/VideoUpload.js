import React from "react";
import Header from "../Header/Header";
import uploader from "../../assets/images/Upload-video-preview.jpg";
import Button from "../Button/Button";
import buttonImage from "../../assets/images/icons/upload.svg";
import { Link } from "react-router-dom";

function VideoUpload() {
  return (
    <section>
      <Header />
      <hr />
      <h1>Upload Video</h1>
      <section>
        <div>
          <h3>Video Thumbnail</h3>
          <img src={uploader} />
        </div>
        <form>
          <label>TITLE YOUR VIDEO</label>
          <input placeholder="Add a Title to your Video" />
          <label>ADD A DESCRIPTION</label>
          <textarea placeholder="ADD A DESCRIPTION TO YOUR VIDEO" />
          <div>
            <Link to="/">
              <Button buttonName="UPLOAD" image={buttonImage} />
            </Link>
            <Link to="/">
              <a>Cancel</a>
            </Link>
          </div>
        </form>
      </section>
    </section>
  );
}

export default VideoUpload;
