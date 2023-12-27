import React from 'react'
import  {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div>
     <nav className='mainNav'>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/aboutUs'>AboutUs</NavLink>
    <NavLink to='/history'>History</NavLink>
    </nav>
    </div>
  )
}

export default Navbar