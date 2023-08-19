import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import SideBar from '../../components/SideBar/SideBar'
import './SearchFriend.css'
import SearchSection from '../../components/SearchSection/SearchSection'

const SearchFriend = () => {
  return (
   <>
<Topbar></Topbar>  

<div className='SearchWrapper'>
<div className='SidebarSearch'>
<SideBar> </SideBar> 
    
    </div>
    <div className='SeacrhFriendCards'>
 <SearchSection></SearchSection>
    
        </div> 

</div>


   
   </>
  )
}

export default SearchFriend