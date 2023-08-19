import React from "react";
// import Cover from "../../assets/person/1.jpeg";
// import Profile from "../../assets/person/1.jpeg";
import "./ProfileCard.css";

const ProfileCard = ({name,userid,profileDp,profileCover}) => {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={profileDp} alt="" />
        <img src={profileCover} alt="" />
      </div>

      <div className="ProfileName">
        <span>{name}</span>
        <span>{userid}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>430</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>100</span>
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
