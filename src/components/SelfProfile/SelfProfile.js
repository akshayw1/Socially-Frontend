import React from "react";
import "./SelfProfile.css";
import DemoImage from "../../assets/person/1.jpeg";
import { VscVerifiedFilled } from "react-icons/vsc";

const SelfProfile = (props) => {
  return (
    <div className="selfwrapper">
      <div className="topprofile">
        <div className="mainProf">
          <img src={DemoImage} className="profileDp" alt="" />
          <div className="userinfo">
            <span className="username">
              {" "}
              Akshay Wagh
              <VscVerifiedFilled className="verfiedIcon"></VscVerifiedFilled>{" "}
            </span>

            <span className="socially-username"> @akshaywaghmare</span>
          </div>
        </div>
        <div className="userFollowerInfo">
          <div className="followers center ">
            <span className="profcount"> 4.8k </span>
            Followers
          </div>
          <div className="following center ">
            <span className="profcount"> 877 </span>
            Following
          </div>
          <div className="post center">
            <span className="profcount"> 40 </span>
            Post
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfProfile;
