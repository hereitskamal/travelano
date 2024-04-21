import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdLogin, MdTour } from "react-icons/md";
import TourSelector from "./TourSelector";
import { HiUser } from "react-icons/hi";
import { FiHome, FiPhone } from "react-icons/fi";
import { SiAboutdotme, SiSquare } from "react-icons/si";
import { GoDiamond } from "react-icons/go";
import { IoAddCircle, IoLeaf, IoReorderThreeOutline } from "react-icons/io5";
import "./Navbar.css";
import { RiAdminLine } from "react-icons/ri";
import { FaBlog, FaUsers } from "react-icons/fa";

const AdminNavbar = ({ setSelectedButton, selectedButton }) => {
  const [viewNav, setviewNav] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full vh-100 sticky">
        <div className="flex justify-around flex-wrap">
          <h1 className="text-2xl py-4 font-bold text-center">TRAVELANO</h1>
          <div
            onClick={()=>setSelectedButton("group")}
            className="flex items-center cursor-pointer p-2 px-4 rounded hover:text-blue-700 hover:bg-blue-600 hover:text-white"
          >
            <div className="rounded   m-1 p-2 bg-indigo-500 text-white">
              <FaUsers />
            </div>
            <h1 className="px-2">Add Group Tour</h1>
          </div>
          <div
            onClick={()=>setSelectedButton("package")}
            className="flex items-center cursor-pointer p-2 px-4 rounded  hover:text-green-700 hover:bg-green-600 hover:text-white"
          >
            <div className="rounded   m-1 p-2 bg-green-500 text-white">
              <MdTour />
            </div>
            <h1>Add Package</h1>
          </div>
          <div 
          
          onClick={()=>setSelectedButton("blog")}
          className="flex items-center cursor-pointer p-2 px-4 rounded hover:text-red-700 hover:bg-red-600 hover:text-white">
            <div className="rounded   m-1 p-2 bg-red-500 text-white">
              <FaBlog />
            </div>
            <h1>Add Blog</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;
