import React from 'react';
import  './navbar.css';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <>
    <div className="nav-container">
      <div className="logo">
        <span>DEE</span>
        <span>PAK</span>
      </div>
      <div className="menus">
        <ul className='menus-items'>
          <li className='list-items'><a href='#home'>home</a></li>
          <li className='list-items'><a href='#home'>about</a></li>
          <li className='list-items'><a href='#home'>skill</a></li>
          <li className='list-items'><a href='#home'>resume</a></li> 
        </ul>
        {/* <div className="toggle">
        <MenuIcon />
        </div> */}
      </div>
    </div>
    
    
    </>
  )
}

export default Navbar