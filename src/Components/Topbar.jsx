import search from "../assets/search.svg";
import fullscreen from "../assets/fullscreen_icon.svg";
import notification from "../assets/notification-bell.svg";
import profile from "../assets/profile.jpeg";
import { useEffect, useRef, useState } from "react";

const Topbar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  };

  return (
    <div className="flex items-center justify-between px-4 md:px-8 py-3 border-b border-black/90 bg-white">
      {/* Title */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Student</h2>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="flex items-center border pl-3 pr-2 gap-2 bg-white border-gray-500/30 h-[42px] rounded-full w-44 sm:w-64">
          <img src={search} alt="search icon" className="h-4 w-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full outline-none text-gray-500 text-sm bg-transparent"
          />
        </div>

        {/* Fullscreen & Notification */}
        <img
          src={fullscreen}
          alt="fullscreen"
          className="h-6 w-6 cursor-pointer"
        />
        <div className="relative">
          <img
            src={notification}
            alt="notification"
            className="h-6 w-6 cursor-pointer"
            onClick={() => setNotificationOpen(!notificationOpen)}
          />
          {notificationOpen && (
            <div
              ref={notificationRef}
              className="absolute right-0 top-10 mt-2 w-96 bg-white rounded-xl shadow-xl z-50"
            >
              <div className="bg-[#2c4fa1] text-white px-4 py-3 rounded-t-xl font-semibold text-lg">
                User Notifications
              </div>
              <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
                {[
                  {
                    title: "Payment Confirmation Alert",
                    time: "Mar 6, 2025, 11:26:11 AM",
                  },
                  {
                    title: "Payslip Deadline Alert",
                    time: "Mar 6, 2025, 8:07:21 AM",
                  },
                  {
                    title: "Registration Payslip Alert",
                    time: "Feb 23, 2025, 1:06:07 PM",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full">
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          <img
            src={profile}
            alt="user profile"
            className="w-10 h-10 border rounded-full object-cover cursor-pointer"
            onClick={() => setProfileOpen(!profileOpen)}
          />
          {profileOpen && (
            <div
              ref={profileRef}
              className="absolute right-0 top-10 mt-2 w-72 bg-white rounded-lg shadow-xl p-4 z-50"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={profile}
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-800">
                    MAHRAF TAHMIN CHOWDHURY
                  </h4>
                  <p className="text-xs text-gray-500">
                    mahraf.tahmin.chowdhury@g.bracu.ac.bd
                  </p>
                </div>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span> My
                  Profile
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>{" "}
                  Account Settings
                </li>
                <li
                  onClick={handleLogout}
                  className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded text-red-600"
                >
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span> Sign
                  Out
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
