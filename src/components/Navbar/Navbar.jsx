import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img className='logo' src={assets.logo} alt="Quickserve Logo" />
        <h3 className='navbar-title'>Quickserve Admin</h3>
      </div>
      <div className='navbar-profile'>
        <img className='profile' src={assets.profile_image} alt="Profile" />
      </div>
    </div>
  )
}

export default Navbar
