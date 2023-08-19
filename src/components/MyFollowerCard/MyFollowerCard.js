import React from 'react'
import './MyFollowerCard.css'
import { FaEllipsisH } from "react-icons/fa";
// import image from '../../assets/person/1.jpeg'
import { FriendData } from '../../dynamicdata/FriendData';

const MyFollowerCard = () => {
  return (
   
    <div className='ExploreWrapper'> 
   
    <div className='tags'>

    <h2>My Follower</h2>
    <b> See All</b>
    </div>
{/* <div className='tags'>


    <button className='ExploreBtn'>Product </button>
    <button className='ExploreBtn'>Adult </button>
    <button className='ExploreBtn'>Technology </button>
    </div> */}
   

   {FriendData.map((user)=>{
    return <> 
    <div className='ProfileCardOther'>
    <div className='ProfileDP'>
<img src={user.ProfilePic} alt=''></img>
    </div>
    <div className='ProfileName'>
    <b> {user.name} </b>  <FaEllipsisH></FaEllipsisH>
    </div>
    
   </div>
   </>
   })}
   
   

        
    
    </div>
  )
}

export default MyFollowerCard