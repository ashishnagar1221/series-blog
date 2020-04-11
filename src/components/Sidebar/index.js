import React from 'react';
import './style.css'
import Card from '../UI/Card';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
  return(
    <div className='sidebarContainer'>
       <Card style={{marginBottom:'20px',padding:'20px',boxSizing: 'border-box'}}>
          <div className='cardHeader'>
            <span>About Us</span>
            <div className='profileImageContainer'>
              <img src='https://www.kindpng.com/picc/m/9-94702_user-outline-icon-clipart-png-download-profile-icon.png' alt ='pro'/>
            </div>
          </div>
          <div className='perso'>
            lorem imspon jsjgjn sfhb tjnu tbnjuy ybtywes yn ynjyumnjb tvrthcs  v  btbjkry cd thyrjn rgteergf thyjy egfgthbfghtjqas
          </div>
      </Card>

      <Card style={{marginBottom:'20px',padding:'20px',boxSizing: 'border-box'}}>
          <div className='cardHeader'>
            <span>Social Network</span>
          </div>
      </Card>

      <Card style={{marginBottom:'20px',padding:'20px',boxSizing: 'border-box'}}>
          <div className='cardHeader'>
            <span>Recent Posts</span>
          </div>
      </Card>
      
    </div>
   )

 }

export default Sidebar;