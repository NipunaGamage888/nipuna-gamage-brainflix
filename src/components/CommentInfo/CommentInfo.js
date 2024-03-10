import './commentInfo.css'
function CommentInfo(props) {
  console.log(props.videoDetails);

  return (
    <section className="comment-info">
      {props.videoDetails.comments.map((videoDetail, index) => {
        return (
          <div className="comment-info__details" key={videoDetail.id}>
            <section>
              <hr />
              <div>
                <div>
                  <div></div>
                  <h3>{videoDetail.name}</h3>
                </div>
                <p>{new Date(videoDetail.timestamp).toLocaleDateString()}</p>
              </div>
              <p>{videoDetail.comment}</p>
            </section>
          </div>
        );
      })}
    </section>
  );
}

export default CommentInfo;
