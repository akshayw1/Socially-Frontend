// import React, { useState } from 'react';
import './AboutUsCard.css';
import { FaRegEdit, FaLaptopCode, FaUniversity, FaVoicemail, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";

const AboutUsCard = () => {


  return (
    <div className='AboutWrapper'>
      <div className='AboutHead'>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet cons all Ofectetur. Pellentesque ipsum necat congue pretium cursus orci. It Commodo donec tellus lacus pellentesque sagittis habitant quam amet praesent.</p>
        <button className='EditBioBtn'> <FaRegEdit></FaRegEdit> Edit Bio </button>
      </div>
      <div className='AboutInfo'>
        <h2>Info</h2>
        <ul className='AboutInfoList'>
          <li><FaLaptopCode></FaLaptopCode> Software Developer</li>
          <li> <FaUniversity></FaUniversity> Master's degree</li>
          <li> <FaVoicemail></FaVoicemail> test@mail.com</li>
          <li> <FaLocationArrow></FaLocationArrow> www.wisoky.com</li>
          <li> <FaPhoneAlt></FaPhoneAlt> (316) 555-0116</li>
          <li> <FaLocationArrow></FaLocationArrow> USA</li>
          <li> <FaLocationArrow></FaLocationArrow> 775 Rolling Green Rd.</li>
        </ul>
      </div>

      
    </div>
    
  );
}

export default AboutUsCard;
