import React from 'react';
import './style.css'

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  return(
    <div className='navbar'>
        <ul className="navbarMenu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Posts</a></li>
        <li><a href="#">Contact Us</a></li>
        </ul>
        <div className='search'>
            <input type="search" placeholder="search"/>
             <img alt='search' src={require('../../assets/icons/search.png')}/>
        </div>
    </div>
   )

 }

export default Navbar