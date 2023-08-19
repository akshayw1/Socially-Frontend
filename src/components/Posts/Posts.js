import React, { useState } from 'react'
import './Posts.css'
import { PostsData } from '../../dynamicdata/PostsData'
import Post from '../Post/Post'
const Posts = () => {
  const[DisplayPost,setDisplayPost] = useState(5);
  const LoadMorePost=()=>{
    setDisplayPost(DisplayPost + 5);
  }
  return (
    <div className="Posts">
        {PostsData.slice(0,DisplayPost).map((post, id)=>{
            return <Post data={post} id={id}/>
            
            
        })}
        {DisplayPost < PostsData.length && ( <button className='laodmorebutton' onClick={LoadMorePost}>Load More</button>)
        }
       
    </div>
  )
}

export default Posts