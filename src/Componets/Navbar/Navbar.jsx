import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_icon from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {
  const navRef=useRef();
  useEffect(()=>{
     window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
        
     })
  },[])
  return (

    // Main div starting
    <div ref={navRef} className='navbar'>

      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Show</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Home</li>
          <li>Browse by Langugages</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons' />
        <p>childrens</p>
        <img src={bell_icon} alt=""  />
        <div className='navbar-profile'>

          <img src={profile_icon} alt="" className='profile' />
          <img src={caret_icon} alt="" />
          <div className='dropdown'>
            <p onClick={()=>{logout()}}>SignOut </p>
          </div>

        </div>
      </div>

      </div>       /* Main div ending */
  )
}

export default Navbar