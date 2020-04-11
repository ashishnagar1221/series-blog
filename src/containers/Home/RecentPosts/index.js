import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
    <Card style={{marginBottom:'20px 0'}}>
     <div className='postImageWrapper'>
       <img src="https://patnabeats.com/wp-content/uploads/2016/04/Munger-Fort.jpg" alt="image"/>
     </div>

     <div style ={{textAlign:'center'}}>
       <span>Featured</span>
       <h2>Fitness Mantra to live fit live</h2>
       <span>posted on July 21,2017 by sooor Veera</span>
         <p>fhdskjgh llejflkrhbgkl lehflrh lkhklr ikelh ieioppop pp knwis lofnnk opplejfklkgjflk wwbrqhfjkhgtjr mjkgj lkgfglk</p>
         <button>Ream More</button>
       </div>
    </Card>
    </div>
   )

 }

export default RecentPosts;