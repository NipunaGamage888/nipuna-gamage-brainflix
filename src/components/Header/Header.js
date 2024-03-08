import React from 'react'
import logo1 from '../../assets/logo/BrainFlix-logo.svg'
import profile from '../../assets/images/Mohan-muruge.jpg'
import './header.css'


const Header = () => {
  return (
    <header className='header'>
      <img className='header__logo' src={logo1} alt='Logo of the page'/>
        <div className='header__input-holder'>
            <input className='header__input' type='search' placeholder='Search'/>
            <img className='header__profile-image' src={profile}/>
        </div>
    </header>
  )
}

export default Header