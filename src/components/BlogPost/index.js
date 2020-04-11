import React from 'react';
import Card from '../UI/Card';
import './style.css';

/**
* @author
* @function BlogPost
**/;


const BlogPost = (props) => {
  return(
    <div className='blogPostContainer'>
        <Card>
        <div className='blogHeader'>
            <span className='blogCategory'>Featured</span>
            <h1 className='postTitle'>Beauty of Bihar</h1>
            <span className='postedBy'>posted on july 2018, by Ashish Kaushik</span>
        </div>
        <div className='postImageContainer'>
            <img src={require('../../NewFolder/RohtasFortGate.jpg')} alt='Post Image'/>    
        </div>
        </Card>
    </div>
    
   )

 }

export default BlogPost;