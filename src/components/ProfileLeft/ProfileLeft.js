import React from 'react'
import SelfProfile from '../../components/SelfProfile/SelfProfile'
// import FollowersCard from '../FollowerCard/FollowerCard'
import SideNavbar from '../SideNavbar/SideNavbar'

const ProfileLeft = () => {
  return (
   <div className="ProfileSide">
       <SelfProfile> </SelfProfile>
       <SideNavbar></SideNavbar>
     
       
   </div>
  )
}

export default ProfileLeft;


