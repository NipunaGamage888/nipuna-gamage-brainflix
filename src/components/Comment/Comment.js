import React from 'react'
import Button from '../Button/Button'
import buttonImage from '../../assets/icons/add_comment.svg'
import mainImage from '../../assets/images/Mohan-muruge.jpg'
import './comments.css'

function Comment() {
  return (
    <section className='comment'>
        <h2 className='comment__title'>3 Comments</h2>
        <div className='comment__form-sec'>
            <img className='comment__profile-image' alt='blahhh' src={mainImage}/>
            <form className='comment__form'>
                <label className='comment__label'>
                   Join The Conversation
                </label>
                <textarea className='comment__textarea' name='comment' placeholder='Add a New Comment'/>
                <Button image={buttonImage} buttonName='comment'/>
            </form>
        </div>
    </section>
  )
}

export default Comment
