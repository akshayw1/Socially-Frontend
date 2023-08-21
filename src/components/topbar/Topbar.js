import "./topbar.css";
import { FaSearch,FaMoon } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { RiNotificationLine } from "react-icons/ri";
import React from "react";
import { useState,useEffect } from "react";
import {Link }from "react-router-dom"

export default function Topbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const [theme, setTheme] = useState("");

    function darkTheme() {
        if(theme === "dark"){
            setTheme("");
        }
        else{
            setTheme("dark");
            console.log("darkset");
        }
    } 


useEffect(() => {
    document.body.className = theme;
}, [theme])


  return (
    
    <div className="topbarContainer">
         <div>
    
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Typography sx={{ p: 2 }} className="aaaa"><>
      < button className="DelPost"><Link to ="/profile"> Home </Link></button> < button className="DelPost"><Link to ="/viewprofile"> View Profile</Link></button>
      <button className="DelPost"><Link to = "/search">Search Friend </Link></button>
      <button className="DelPost"><Link to = "/login"> Logout</Link> </button>   </>
      </Typography>
    </Popover>
  </div>
      <div className="topbarLeft">
        <span className="logo">Socially</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
          <FaSearch className="searchIcon topbarsearchIcon"/>
          
        </div>
        
      </div>
      <div className="topbarRight">
        {/* <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div> */}
        <div className="topbarIcons">
          <div className="topbarIconItem">
          <BiMessageSquareDots className="TopIcon"/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItemnnohide">
          <FaMoon className="TopIcon" onClick={() => darkTheme()}/>
            
          </div>
          <div className="topbarIconItem">
          <RiNotificationLine className="TopIcon"/>
            <span className="topbarIconBadge">2</span>
          </div>
        
            
          </div>
          <div className="topbarIconItemnnohide">
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" onClick={handleClick}/>
        </div>
        
      </div>
    </div>
  );
}
