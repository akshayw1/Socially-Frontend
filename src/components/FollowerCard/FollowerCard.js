import React, { useState } from "react";
import "./FollowerCard.css";
import ProfileCard from "../ProfileCard/ProfileCard";
import { FriendData } from "../../dynamicdata/FriendData";
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  
 

  boxShadow: 24,
  p: 4,
};

const FollowersCard = () => {
  const [DisplayCard,SetDisplayCard]= useState(5);
  const [open, setOpen] = useState(false);
  const [selectedFollower, setSelectedFollower] = useState(null);


  const loadmore = () =>{
    SetDisplayCard(DisplayCard+5 )
  }
  const handleOpen = (follower) => {
    setSelectedFollower(follower);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div className="FollowersCard">
      <div>
        
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {selectedFollower && (
              <>
                
                <ProfileCard name={selectedFollower.name} userid={selectedFollower.username} profileDp={selectedFollower.ProfilePic}/>
              </>
            )}
          </Box>
        </Modal>
      </div>
      <h3>Suggested for you</h3>
      <div className="Fsearchbar">
        <input
          placeholder="Search for friend, post or video"
          className="FsearchInput"
        />
      </div>
      {FriendData.slice(0,DisplayCard).map((follower, id) => {
        return (
          <div className="follower" key={id}>
            <div>
              <img
                src={follower.ProfilePic}
                alt=""  
                className="followerImage"
                onClick={() => handleOpen(follower)}
              />
              <div className="name">
                <span>{follower.name}</span>
                <span>{follower.username}</span>
              </div>
            </div>
            <button className="fc-button">Follow</button>
          </div>
        );
      })}

      <button onClick={loadmore} className="laodmorebutton">Load more</button>
    </div>
  );
};

export default FollowersCard;
