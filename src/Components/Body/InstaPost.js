import React from "react";
import tajmahal from "../Images/tourcard/tajmahal.jpg";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoMdHeart } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { GoBookmark } from "react-icons/go";

import "./InstaPost.css";

const InstaPost = () => {
    let arr = [1,2,3]
  return (
    <>
    <div className="insta-post-container">
   {arr.map((val, key)=>{
    return <div className="instaPost-Container m-4" >
    <div className="instaPost-header" >
      <div className="logo-username items-center">
        <div className="insta-user-logo"></div>
        <div className="insta-user-detail">
          <h3>hereitskamal</h3>
          <p>Bengaluru,india</p>
        </div>
      </div>
      <p style={{fontSize:'20px', float:'right'}}><HiOutlineDotsVertical /></p>
    </div>
    <img src={tajmahal} alt="" style={{ width: "300px", height: "300px" }} />
    <div className="instaPost-icons-container">
    <div className="instaPost-icons flex">
    <IoMdHeart style={{color:'red'}} className="Insta-icon" />
    <FiMessageCircle className="Insta-icon"/>
    <IoPaperPlaneOutline className="Insta-icon"/>
    </div>
    <GoBookmark/>
    </div>
    <div className="other-details">
    <p>1,200 Likes</p>
    <div className="post-details">
      <p style={{fontWeight:'600'}}>username</p>
      <p>Most Comfortable trevel, jst loved it.</p>
      <p style={{color:'blue',fontWeight:'500',lineHeight:'9px'}}>#pictournic #trevelDiries #memories</p>
      <p style={{color:'grey', width:'100%'}}>view all comments</p>
      <p style={{fontSize:'10px'}}>5 days ago</p>
    </div>
    </div>
  </div>
   })}
    </div>
    </>
  );
};

export default InstaPost;
