import React, { useState, useEffect } from 'react';
import './Posts.css';
import Post from '../Post/Post';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [displayPost, setDisplayPost] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos?page=15&per_page=30&client_id=mW74KpA7ctqLZRB-MbZEzIQGyBFWWo18tHTB_lI9GZ8');
        const unsplashData = response.data;
        console.log(unsplashData)

        const foormattedposts = unsplashData.map((item) => ({
          name: item.user.instagram_username || 'Unknown',
          ProfilePic: item.user.profile_image.large || ' ',
          img: item.urls.regular,
          desc: item.alt_description || 'No description available',
          likes: item.likes, 
          location: item.user.location
        }));

        setPosts(foormattedposts);
      } catch (error) {
        console.error('Error fetching Unsplash data:', error);
      }
    };

    fetchPosts();
  }, []);

  const loadMorePost = () => {
    setDisplayPost(displayPost + 5);
  }

  return (
    <div className="Posts">
      {posts.slice(0, displayPost).map((post, id) => (
        <Post data={post} key={id} />
      ))}

      {displayPost < posts.length && (
        <button className='laodmorebutton' onClick={loadMorePost}>Load More</button>
      )}
    </div>
  );
}

export default Posts;
