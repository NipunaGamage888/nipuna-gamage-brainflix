import './commentInfo.css'
function CommentInfo(props) {
  console.log(props.videoDetails);

  return (
    <section className="comments-info">
      {props.videoDetails.comments.map((videoDetail) => {
        return (
    
            <section className="comments-info__details" key={videoDetail.id}>
              <hr className='comments-info__hr' />
              <div className='comments-info__comment-detail'>
                <div className='comments-info__person'>
                  <div className='comments-info__profile-pic'></div>
                  <h3 className='comments-info__name'>{videoDetail.name}</h3>
                </div>
                <p className='comments-info__date'>{new Date(videoDetail.timestamp).toLocaleDateString()}</p>
              </div>
              <p className='comments-info__comment'>{videoDetail.comment}</p>
              
            </section>
        );
      })}
    </section>
  );
}

export default CommentInfo;
