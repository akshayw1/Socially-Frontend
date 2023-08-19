import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import SideBar from '../../components/SideBar/SideBar'
import './MyProfile.css'
// import SearchSection from '../../components/SearchSection/SearchSection'
// import ProfileCard2 from '../../components/ProfileCard2/ProfileCard2'
// import AboutUsCard from '../../components/AboutUsCard/AboutUsCard'
import ViewProfile from '../ViewProfile/ViewProfile'

const SearchFriend = () => {
  return (
   <>
<Topbar></Topbar>  

<div className='MSearchWrapper'>
<div className='MSidebarSearch'>
<SideBar> </SideBar> 
    
    </div>
    <div className='MyProfileCards'>
<ViewProfile></ViewProfile>
    
        </div> 

</div>


   
   </>
  )
}

export default SearchFriend