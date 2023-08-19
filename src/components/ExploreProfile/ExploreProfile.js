import React from 'react'
import './ExploreProfile.css'
// import image from '../../assets/person/1.jpeg'
import { FriendData } from '../../dynamicdata/FriendData'
const ExploreProfile = () => {
  return (
   
    <div className='ExploreWrapper'> 
   
    <div className='tags'>

    <h2>My Photos</h2>
    <b> See All</b>
    </div>
{/* <div className='tags'>


    <button className='ExploreBtn'>Product </button>
    <button className='ExploreBtn'>Adult </button>
    <button className='ExploreBtn'>Technology </button>
    </div> */}

        <div className='row'>
        
        {FriendData.slice(0,6).map((user)=>{
          return(
 <img src={user.ProfileCover} alt='' className='explore-img'></img>


        )})}
       
    
      
        
        </div>
        
       
    
    </div>
  )
}

export default ExploreProfile