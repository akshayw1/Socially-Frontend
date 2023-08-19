import React from 'react'
import './Profile.css'
import Topbar from '../../components/topbar/Topbar'
import PostSide from '../../components/PostSide/PostSide'
import SideBar from '../../components/SideBar/SideBar'
import RightBar from '../../components/RightBar/RightBar'

const Profile = () => {
  return (
    
    <>
    <Topbar> </Topbar>
   
    <div className="Profile">
     
      
     
      <SideBar> </SideBar>
    
  
        <div className="Profile-center">
          <PostSide></PostSide>
            {/* <ProfileCard></ProfileCard> */}
        </div>
       
      <RightBar/>
      
    </div>
    </>
  )
}

export default Profile