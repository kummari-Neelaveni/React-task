import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navabar'>

      <div className='right'>
        Fun UseState Hooks
      </div>

      <div className='Navbar_links'>
      <Link to="/counter" id="link">
      <span>counter</span>
       </Link>
     <Link to="/colorchange" id="link">
      <span>colorchange</span>
     </Link>

     <Link to="/randomcolor" id="link">
      <span>randomcolor</span>
     </Link>
     

     <Link to="/theme" id="link">
     <span>theme</span>
   </Link>
      
      </div>
    </div>
  )
}

export default Navbar
