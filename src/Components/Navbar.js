// Navbar.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import TourSelector from "./TourSelector";
import { HiUser } from "react-icons/hi";
import { FiHome, FiPhone } from "react-icons/fi";
import { SiAboutdotme, SiSquare } from "react-icons/si";
import { GoDiamond } from "react-icons/go";
import { IoLeaf, IoReorderThreeOutline } from "react-icons/io5";
import "./Navbar.css";
import { RiAdminLine } from "react-icons/ri";
import logo from './Images/icon.png'

const Navbar = () => {
  const [viewNav, setviewNav] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="navbar-container p-3  ">
      <div className={`logo ${window.innerWidth < 450 && 'w-full' } rounded-xl flex items-center justify-between`}>
        <h1 className="text-4xl flex px-3 font-bold w-full">  <label className="w-10 py-1 pl-1"><img className="w-10" src={logo} alt="Company Logo" /></label>RAVELANO</h1>
        {!viewNav ? (
          <button
            onClick={() => setviewNav(true)}
            className={`user ${
              window.innerWidth > 450 && "hidden"
            } px-3 rounded-full`}
          >
            <IoReorderThreeOutline fontSize={'30px'} />
          </button>
        ) : (
          <button
            onClick={() => setviewNav(false)}
            className={`user ${
              window.innerWidth > 450 && "hidden"
            } px-3 rounded-full`}
          >
            <SiSquare />
          </button>
        )}
      </div>
      {window.innerWidth > 650 && <TourSelector />}
      <div
        className={`user ${
          window.innerWidth > 450 && `flex items-center justify-center`
        } 
        ${window.innerWidth < 450 && !viewNav && "hidden"} px-3 rounded-full`}
      >
        <div
          onClick={() => navigate("/login")}
          className="flex items-center border rounded-full pr-2 m-2 hover:text-blue-700 hover:border-blue-600"
        >
          <div className="rounded-full m-1 p-2 bg-indigo-500 text-white">
            <HiUser />
          </div>
          <h1 className="px-2">login</h1>
        </div>
        <div
          onClick={() => navigate('/aboutus')}
          className="flex items-center border rounded-full pr-2 m-2 hover:text-green-700 hover:border-green-600"
        >
          <div className="rounded-full m-1 p-2 bg-green-500 text-white">
            <IoLeaf />
          </div>
          <h1>About Us</h1>
        </div>
        <div 
          onClick={() => navigate('/contactus')}
          className="flex items-center border rounded-full pr-2 m-2 hover:text-red-700 hover:border-red-600"
        >
          <div className="rounded-full m-1 p-2 bg-red-500 text-white">
            <FiPhone />
          </div>
          <h1>Contact Us</h1>
        </div>
        <div
          onClick={() => navigate("/adminDashboard")}
          className="flex items-center border rounded-full pr-2 m-2 hover:text-orange-700 hover:border-orange-600"
        >
          <div className="rounded-full m-1 p-2 bg-orange-500 text-white">
            <RiAdminLine />
          </div>
          <h1>Admin</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
