import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./UserProfile.css";
import Post from '../Post/Post'

const UserProfile = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get(
          `https://api.unsplash.com/users/${username}/?client_id=mW74KpA7ctqLZRB-MbZEzIQGyBFWWo18tHTB_lI9GZ8`
        );

        const postsResponse = await axios.get(
          `https://api.unsplash.com/users/${username}/photos/?client_id=mW74KpA7ctqLZRB-MbZEzIQGyBFWWo18tHTB_lI9GZ8`
        );

        const userDataPost =  postsResponse.data;
        const userPosts = userDataPost.map((item) => ({
          name: item.user.instagram_username || 'Unknown',
          ProfilePic: item.user.profile_image.large || ' ',
          img: item.urls.regular,
          desc: item.alt_description || 'No description available',
          likes: item.likes, 
          location: item.user.location
        }));

        

        const user = userResponse.data;
        console.log() 

        setUserData(user);
        setUserPosts(userPosts);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  return (
    <div className="UserProfileShowWrapper">
    {loading && <p>Loading...Rukna Thoda</p>}
    {error && <p>Error: {error.message}</p>}
    {userData && (
      <>
        <ProfileCard
          name={userData.name}
          userid={userData.instagram_username}
          profileDp={userData.profile_image.medium}
          profileCover={userData.photos[0].urls.raw}
          follower={userData.followers_count}
          following={userData.following_count}
          bio={userData.bio}
        />
        <h2>{userData.name} Post</h2>
        <div className="UserPosts">
          {userPosts.map((post) => (
            <Post data ={post}
              
            />

         
          ))}
        </div>
        
      </>
    )}
  </div>  );
};

export default UserProfile;
