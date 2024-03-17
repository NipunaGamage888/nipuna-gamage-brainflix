import React from 'react'
import './button.scss'



function Button(props) {
  return (
    <button className='button'>
        <img className='button__image' src={props.image} alt='small icon of uploading'/>
        <p className='button__name'>{props.buttonName}</p>
    </button>
  )
}

export default Button
