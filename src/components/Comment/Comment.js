import React from "react";
import Button from "../Button/Button";
import buttonImage from "../../assets/images/icons/add_comment.svg";
import mainImage from "../../assets/images/Mohan-muruge.jpg";
import "./comments.scss";

function Comment() {
  return (
    <section className="comment">
      <h2 className="comment__title">3 Comments</h2>
      <div className="comment__form-sec">
        <img
          className="comment__profile-image"
          alt="profile photo imagee"
          src={mainImage}
        />
        <form className="comment__form">
          <label className="comment__label" for="comment">
            Join The Conversation
            <textarea
              id="comment"
              name="comment"
              className="comment__textarea"
              placeholder="Add a New Comment"
            />
          </label>

          <Button image={buttonImage} buttonName="comment" />
        </form>
      </div>
    </section>
  );
}

export default Comment;
