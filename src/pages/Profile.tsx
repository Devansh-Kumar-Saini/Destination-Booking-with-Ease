import React from "react";
import profilePic from "../assets/react.svg"; // replace with your actual image path

const Profile: React.FC = () => {
  // Get user info from localStorage
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex bg-white shadow-xl rounded-2xl overflow-hidden w-[800px]">
        {/* Left Image Side */}
        <div className="w-1/3 bg-teal-500 flex items-center justify-center relative">
          <img
            src={profilePic}
            alt="Profile"
            className="rounded-full w-48 h-48 object-cover border-4 border-white shadow-md absolute top-1/2 transform -translate-y-1/2"
          />
        </div>

        {/* Right Info Side */}
        <div className="w-2/3 p-10">
          <div className="mb-6">
            <div className="w-16 h-1 bg-teal-400 rounded-full mb-2"></div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Personal Information
            </h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Name:</span> {user.firstName || "N/A"}{" "}
              {user.lastName || ""}
            </li>
            <li>
              <span className="font-semibold">Email:</span> {user.email || "N/A"}
            </li>
            <li>
              <span className="font-semibold">Contact Number:</span>{" "}
              {user.contact || "N/A"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
