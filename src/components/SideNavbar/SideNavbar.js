import React from 'react'
import './SideNavbar.css'
import { AiOutlineAppstore,AiOutlineSetting } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { TbUserSearch } from "react-icons/tb";
import {Link} from 'react-router-dom';

const SideNavbar = () => {
  return (
    <div className='SideNavWarpper'>
    <div className='menuCard'>
        <div className='menuIcon'> <AiOutlineAppstore/></div>
        <h3> <Link to = "/profile"> NewsFeed </Link></h3>
    </div>
    <div className='menuCard'>
        <div className='menuIcon'> <FaRegUser/></div>
        <h3><Link to = "/viewprofile"> My Profile </Link> </h3>
    </div>
    <div className='menuCard'>
        <div className='menuIcon'><TbUserSearch/> </div>
        <h3><Link to = "/search">  Discover </Link>  </h3>
    </div>
    <div className='menuCard'>
        <div className='menuIcon'><MdPeople/> </div>
        <h3>My Account </h3>
    </div>
    <div className='menuCard'>
        <div className='menuIcon'><AiOutlineSetting/> </div>
        <h3> Settings</h3>
    </div>

    </div>


  )
}

export default SideNavbar