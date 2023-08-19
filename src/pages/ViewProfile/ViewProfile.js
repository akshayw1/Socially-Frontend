import React from 'react'

import ProfileCard2 from '../../components/ProfileCard2/ProfileCard2';
import './ViewProfile.css'
// import Topbar from '../../components/topbar/Topbar'
import PostSide from '../../components/PostSide/PostSide';

import AboutSideBar from '../../components/AboutSideBar/AboutSideBar'
import AboutRight from '../../components/AboutRight/AboutRight';
import Topbar from '../../components/topbar/Topbar';


const ViewProfile = () => {
  return (
    <> 
  <Topbar></Topbar>
    <div className='ViewProfilePage'>
        <ProfileCard2></ProfileCard2>

   
    <div className="ViewProfile">
     
      
   
    <AboutSideBar></AboutSideBar>
   
 
       <div className="ViewProfile-center">
       <PostSide></PostSide>
       </div>
      
       <AboutRight></AboutRight>
     
   </div>
   </div>
    </>
  )
}

export default ViewProfile;