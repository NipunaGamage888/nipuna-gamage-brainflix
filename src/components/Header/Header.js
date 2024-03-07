import React from 'react'
import logo1 from '../../assets/logo/BrainFlix-logo.svg'


const Header = () => {
  return (
    <header>
      <img src={logo1} alt='Logo of the page'/>
        <div>
            <input type='search' placeholder='Search'/>
        </div>
    </header>
  )
}

export default Header