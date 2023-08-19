import React from 'react'
import PostShare from '../PostShare/PostShare'
import Posts from '../Posts/Posts'
import './PostSide.css'
import { useState } from 'react'
const PostSide = () => {
  const [posts, setPosts] = useState([]);
  const handleAddPost = (postData) => {
    // Add the postData to your list of posts
    setPosts([...posts, postData]);
  };

  return (
   <div className="PostSide">
      <PostShare onPost={handleAddPost} />
       <Posts/>
   </div>
  )
}

export default PostSide;


