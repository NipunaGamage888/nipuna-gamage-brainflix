import React from 'react'
import './nextvideo.css'
// {
//     "id": "84e96018-4022-434e-80bf-000ce4cd12b8",
//     "title": "The Future of Artificial Intelligence",
//     "channel": "Aiden Thompson",
//     "image": "https://unit-3-project-api-0a5620414506.herokuapp.com/images/image0.jpg"
//   },
function NextVideo({videos, wantVideo}) {
  return (
    <section className='videos'>
        <h3 className='videos__heading'>Next Videos</h3>
        <div className='videos__map'> 
            {videos.map((video)=>{
                return(
                    
                        <button onClick={()=>wantVideo(video.id)} key={video.id} className='videos__button'>
                        <img className='videos__image'alt='Images of next videos you can watch' src={video.image}/>
                        <div className='videos__info'>
                            <p className='videos__title'>{video.title}</p>
                            <p className='videos__channel'>{video.channel}</p>
                        </div>
                    </button>
                    
                    
                )
            })}
        </div>
    </section>
  )
}

export default NextVideo
