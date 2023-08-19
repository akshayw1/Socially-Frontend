import React from 'react'
import './AboutRight.css'
import ExploreProfile from '../ExploreProfile/ExploreProfile'
import MyFollowerCard from '../MyFollowerCard/MyFollowerCard'
const AboutRight = () => {
  return (
   
    <div className="Aboutsidebar">
      <div className="sidebarWrapper">
      <ExploreProfile></ExploreProfile>
      <MyFollowerCard></MyFollowerCard>
      
       
        
      </div>
    </div>
  )
}

export default AboutRight