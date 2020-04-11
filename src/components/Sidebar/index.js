import React,{useState,useEffect} from 'react';
import './style.css'
import Card from '../UI/Card';
import blogPost from '../../data/blog.json'
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

  
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    const posts = blogPost.data;
    setPosts(posts);
  },[posts]);

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
          <div className='recentPosts'>

            {
                posts.map(post =>{
                  return (
                    <NavLink key={post.id} to={`/post/${post.id}`}>
                  <div className='recentPost'>
                    <h3>{post.blogTitle}</h3>
                    <span> {post.postedOn}</span>
                  </div>
                  </NavLink>
                  );
                })
            }
          </div>
      </Card>
    </div>
   )

 }

export default Sidebar;