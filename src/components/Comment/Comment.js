import React, { useState } from "react";
import Button from "../Button/Button";
import buttonImage from "../../assets/images/icons/add_comment.svg";
import mainImage from "../../assets/images/Mohan-muruge.jpg";
import "./comments.scss";
import axios from "axios";

function Comment({ videoDetailsID }) {

  const [comment, setComment] = useState("");

  const uploadComment = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        `http://localhost:8080/api/videos/${videoDetailsID}/comments`,
        {
          comment,
        }
      );
    } catch (error) {
      console.error(error);
    }
    setComment('')
  };
  return (
    <section className="comment">
      <h2 className="comment__title">3 Comments</h2>
      <div className="comment__form-sec">
        <img
          className="comment__profile-image"
          alt="profile photo"
          src={mainImage}
        />
        <form className="comment__form">
          <label className="comment__label" htmlFor="comment">
            Join The Conversation
            <textarea
              id="comment"
              name="comment"
              className="comment__textarea"
              placeholder="Add a New Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </label>
          <span onClick={uploadComment}>
            <Button image={buttonImage} buttonName="comment" />
          </span>
        </form>
      </div>
    </section>
  );
}

export default Comment;
