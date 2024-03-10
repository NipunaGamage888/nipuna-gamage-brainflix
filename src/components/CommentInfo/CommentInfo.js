import './commentInfo.css'
function CommentInfo(props) {
  console.log(props.videoDetails);

  return (
    <section className="comment-info">
      {props.videoDetails.comments.map((videoDetail, index) => {
        return (
    
            <section className="comment-info__details" key={videoDetail.id}>
              <hr className='comments-info__hr' />
              <div className='comment-info__comment-detail'>
                <div className='comment-info__person'>
                  <div className='comment-info__profile-pic'></div>
                  <h3 className='comment-info__name'>{videoDetail.name}</h3>
                </div>
                <p className='comment-info__date'>{new Date(videoDetail.timestamp).toLocaleDateString()}</p>
              </div>
              <p className='comment-info__comment'>{videoDetail.comment}</p>
              
            </section>
        );
      })}
    </section>
  );
}

export default CommentInfo;
