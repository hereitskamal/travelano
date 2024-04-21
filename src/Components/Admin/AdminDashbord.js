import React, { useState } from "react";
import AdminNavbar from "../AdminNavbar";
import GroupTourEventForm from "../Components/HomePageComponents/GroupTourEventForm";
import PackageForm from "../Components/HomePageComponents/PackageForm";
import BlogForm from "./BlogForm";

const AdminDashbord = () => {
  const [selectedButton, setSelectedButton] = useState("group");
  return (
    <div className="w-full">
      <div className="">
        <AdminNavbar
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
        />
      </div>
      <div className="">
        {selectedButton === "group" && <GroupTourEventForm />}
        {selectedButton === "package" && <PackageForm />}
        {selectedButton === "blog" && <BlogForm />}
      </div>
    </div>
  );
};

export default AdminDashbord;
