import React from 'react'
import './ProfileCard2.css'
import Cover from "../../assets/person/1.jpeg";
import { FaEllipsisH } from "react-icons/fa";

import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import {Link} from 'react-router-dom';


const ProfileCard2 = () => {
  return (
    <div className='ProfileWrapper'>

<div className='ProfileCover'>
<img src="https://wallpapercave.com/wp/wp2752752.jpg"alt="" />
</div>
<div className='ProfileCoverBottom'>
    <div className='sept'>  
    <div className='ProfileCoverDP'>
    <img src={Cover} alt="" />
    </div>
    <div className='UserName'>
        Akshay Waghmare
        <span className='ProfileInfo'>
        <AvatarGroup max={3}>
  <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/women/21.jpg" />
  <Avatar alt="Travis Howard" src="https://randomuser.me/api/portraits/women/72.jpg" />
  <Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/women/57.jpg" />
  <Avatar alt="Agnes Walker" src="https://randomuser.me/api/portraits/women/75.jpg" />
  <Avatar alt="Trevor Henderson" src="https://randomuser.me/api/portraits/women/63.jpg" />
</AvatarGroup>
<p> 100 Followers .</p>
            <p>200 Following </p>
        </span>
    </div>
    </div>
    <div className='ProfileActions'>
        <button className='EditProfileBtn'> 
         Edit Profile</button>
         <button className='EditProfileBtn'> 
        <Link to = "/profile"> Back to Feed  </Link> </button>
        <span><FaEllipsisH></FaEllipsisH></span>
    </div>
</div>
<div className='ProfileBottomMenu'>
    <hr className='hairLine'></hr>
    <ul className='ProfileMenu'>
        <li className='Profilesubmenu activeTab'>Feed</li>
        <li className='Profilesubmenu'>About</li>
        <li className='Profilesubmenu'>Photos</li>
        <li className='Profilesubmenu'>Community</li>
        <li className='Profilesubmenu'>Friends</li>
    </ul>
</div>


    </div>

  )
}

export default ProfileCard2