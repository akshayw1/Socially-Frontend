import React from 'react'
import './UserCard.css'
import { useState } from 'react';


const UserCard = ({name = "Akshay",email = "sesx@gamil.com",ProfilePic,ProfileCover }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = () => {
    setIsFollowing((prevState) => !prevState);
  };


  return (
    <div className='UserCardWrapper'>
        <div className='UserCover'>
        <img src={ProfileCover} alt =''></img>
        </div>
        <div className='userDp'>
      <img src={ProfilePic} alt =''></img>
        </div>
        <div className='UserData'>
            <h3>{name}</h3>
            {email}
            <button className={`FollowBtn ${isFollowing ? 'FollowToggle' : ''}`} onClick={handleFollowToggle}>
          {isFollowing ? 'Unfollow' : 'Follow'}
        </button>
        </div>


    </div>
  )
}

export default UserCard