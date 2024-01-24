import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <>
      <div className='navbar'>
        <div className='inner-div'>
            <img className='brand-logo' src="https://www.holagala.in/_next/image?url=%2Flogo.png&w=256&q=75" alt="Logo" />
            <div className='vertical-line'></div>
            <p className='date-p' >Happening on <br/> 2024 January  <br/>26, 27, 28</p>
            <p className='nav-p'>Home</p>
            <p className='nav-p'>About</p>
            <p className='nav-p'>Events</p>
            <p className='nav-p'>Gallery</p>
            <p className='nav-p'>Contacts</p>
            <button className='buy-button'>Buy Tickets</button>
       </div>
      </div>
    </>
  )
}

export default Navbar
