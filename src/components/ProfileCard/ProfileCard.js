import React from "react";

import "./ProfileCard.css";

const ProfileCard = ({name,userid,profileDp,profileCover,follower,following,bio="Not Available"}) => {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={profileCover} alt="" />
        <img src={profileDp} alt="" />
      </div>

      <div className="ProfileName">
        <span>{name}</span>
        <span>{userid}</span>
        <span>{bio}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{following}</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{follower}</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
