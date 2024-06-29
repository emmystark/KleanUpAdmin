import React, { useEffect, useRef, useState } from "react";
// import React from 'react'
import Logo from "./Media/KleanUp.png";
import Profile from "./Media/profile.png";
import Notification from "./Media/notification.png";
import Home from "./Media/home.png";
import Cleaning from "./Media/cleaning.png";
import User from "./Media/user.png";
import Schedule from "./Media/schedule.png";
import Financial from "./Media/financial.png";
import Customer from "./Media/customer.png";
import Analytics from "./Media/analytics.png";
import Account from "./Media/account.png";
import Logout from "./Media/logout.png";
import { Link } from "react-router-dom";
import Planselector from "./Planselector";
import Calender from "./Calender";
import DropdownMenu from "./DropdownMenu";

// import  from './Media/'
// import  from './Media/'
// import { Link } from 'react-router-dom';

import {
  faChevronDown,
  faXmark,
  faBars,
  faClose,
  faMagnifyingGlass,
  faArrowLeft,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DashboardTemp({
  showAdditionalDiv,
  showAdditionalDiv1,
  showAdditionalDiv2,
  showAdditionalDiv3,
  showAdditionalDiv4,
  showAdditionalDiv5,
  showAdditionalDiv6,
  showAdditionalDiv7,
  showAdditionalDiv8,
  showAdditionalDiv9,
  showAdditionalDiv10,
  showAdditionalDiv11,
  showAdditionalDiv12,
  showAdditionalDiv13,
  showAdditionalDiv14,
  showAdditionalDiv15,
  showAdditionalDiv16,
  showAdditionalDiv17,
  showAdditionalDiv18,
  showAdditionalDiv19,
  showAdditionalDiv20,
  WelcomeText,
  NavText,
  AltNav,
  InitNav,
  Color,
  tempColor,
  Color1,
  tempColor1,
  Color2,
  tempColor2,
  Color3,
  tempColor3,
  Color4,
  tempColor4,
  Color5,
  tempColor5,
  Color6,
  tempColor6,
  Color7,
  tempColor7,
  ValueInText,
  ValueInText1,
  ValueInText2,
  ValueInText3,
  ValueInText4,
  ValueInText5,
  ValueInText6,
  ValueInText7,
  COLOR,
  opacityValue,
}) {
  const myCustomColor = "#FAFAFA";
  // const myCustomColor1 = "red";
  // const myCustomColor2 = "lightblue";
  const myCustomColor2 = "#019B23";
  const myCustomColor4 = "#3DA5EC";

  const [showScrollbar, setShowScrollbar] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the scrollbar after 5 seconds (adjust the time as needed)
    const timeoutId = setTimeout(() => {
      setShowScrollbar(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clear the timeout when the component unmounts or if needed in other cases
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs only once

  const [openMenu, setOpenMenu] = useState(false);
  const [showCloseMenu, setShowCloseMenu] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    setShowCloseMenu(!showCloseMenu);
  };

  const openMenuRef = useRef(null);
  // const menuIconRef = useRef(null);

  useEffect(() => {
    function clickOut(event) {
      if (openMenuRef.current && !openMenuRef.current.contains(event.target)) {
        setOpenMenu(false);
        setShowCloseMenu(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", clickOut);

    // Unbind the event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", clickOut);
    };
  }, []);

  return (
    <>
      <div className={`overflow-x-hidden ${COLOR} opacity-${opacityValue}`}>
        <div className="fixed lg:block hidden">
          <div
            className="w-80 h-screen-3 pb-20 absolute   bg-white "
            // style={{ backgroundColor: myCustomColor1 }}
          >
            <img
              className="h-8 w-28 ml-14 mt-12 relative -top-5 object-contain"
              src={Logo}
            />

            <div
              className={`ml-10 mt-4 overflow-y-scroll overflow-x-hidden ${
                showScrollbar ? "" : "overflow-hidden"
              }`}
            >
              <div className="text-gray-500">
                <Link to="/WelcomeDashboard">
                  <img
                    src={Home}
                    className="w-1/12 h- relative top-6 left-4 filter brightness-75 saturate-125"
                    style={{
                      filter: `saturate(1.25) brightness(${ValueInText})`,
                    }}
                  />

                  <a
                    href=""
                    className="p-2 pl-12 px-48 py-3 whitespace-nowrap rounded-l-xl"
                    style={{ backgroundColor: Color, color: tempColor }}
                  >
                    Home
                  </a>
                </Link>
              </div>
              <div className="text-gray-500 pt-3">
                <Link to="/CleaningRequest">
                  <img
                    src={Cleaning}
                    className="w-1/12 h- relative top-6 left-4 filter brightness-75 saturate-125"
                    style={{
                      filter: `saturate(1.25) brightness(${ValueInText1})`,
                    }}
                  />
                  <a
                    href=""
                    className="p-2 pl-11 px-20  py-3 whitespace-nowrap rounded-l-xl"
                    style={{ backgroundColor: Color1, color: tempColor1 }}
                  >
                    Cleaning Requests{" "}
                    <span className="relative left-16 px-1 text-xs bg-red-600 rounded-xl text-white">
                      5
                    </span>
                  </a>
                </Link>
              </div>
              <div className="text-gray-500 pt-3">
                <Link to="/UserManagement">
                  <img
                    src={User}
                    className="w-1/12 h- relative top-6 left-4 filter brightness-75 saturate-125"
                    style={{
                      filter: `saturate(1.25) brightness(${ValueInText2})`,
                    }}
                  />
                  <a
                    href=""
                    className="p-2 pl-10 px-28 py-3 whitespace-nowrap rounded-l-xl"
                    style={{ backgroundColor: Color2, color: tempColor2 }}
                  >
                    User management
                  </a>
                </Link>
              </div>
              <div className="text-gray-500 pt-3">
                <Link to="/ScheduleOverview">
                  <img
                    src={Schedule}
                    className="w-1/12 h- relative top-6 left-4 filter brightness-75 saturate-125"
                    style={{
                      filter: `saturate(1.25) brightness(${ValueInText3})`,
                    }}
                  />
                  <a
                    href=""
                    className="p-2 pl-11 px-40 py-3 whitespace-nowrap rounded-l-xl"
                    style={{ backgroundColor: Color3, color: tempColor3 }}
                  >
                    Scheduling
                  </a>
                </Link>
              </div>
              <div className="text-gray-500 pt-3">
                <Link to="/FinancialManagement">
                  <img
                    src={Financial}
                    className="w-1/12 h- relative top-6 left-3 filter brightness-75 saturate-125"
                    style={{
                      filter: `saturate(1.25) brightness(${ValueInText4})`,
                    }}
                  />
                  <a
                    href=""
                    className="p-2 pl-11 px-20 py-3 whitespace-nowrap rounded-l-xl"
                    style={{ backgroundColor: Color4, color: tempColor4 }}
                  >
                    Financial management
                  </a>
                </Link>
              </div>
              <div className="text-gray-500 pt-3">
                <Link to="/CustomerSupport">
                  <img
                    src={Customer}
                    className="w-1/12 h- relative top-6 left-4 filter brightness-75 saturate-125"
                    style={{
                      filter: `saturate(1.25) brightness(${ValueInText5})`,
                    }}
                  />
                  <a
                    href=""
                    className="p-2 pl-11 px-28 py-3 whitespace-nowrap rounded-l-xl"
                    style={{ backgroundColor: Color5, color: tempColor5 }}
                  >
                    Customer support
                  </a>
                </Link>
              </div>
              <div className="text-gray-500 pt-3">
                <Link to="/AnalyticsAndInsights">
                  <img
                    src={Analytics}
                    className="w-1/12 h- relative top-6 left-3 filter brightness-75 saturate-125"
                    style={{
                      filter: `saturate(1.25) brightness(${ValueInText6})`,
                    }}
                  />
                  <a
                    href=""
                    className="p-2 pl-9 px-24 py-3 whitespace-nowrap rounded-l-xl"
                    style={{ backgroundColor: Color6, color: tempColor6 }}
                  >
                    Analytics and insights
                  </a>
                </Link>
              </div>
              <div className="text-gray-500 pt-3">
                <img
                  src={Account}
                  className="w-1/12 h- relative top-6 left-4 filter brightness-75 saturate-125"
                  style={{
                    filter: `saturate(1.25) brightness(${ValueInText7})`,
                  }}
                />
                <a
                  href=""
                  className="p-2 pl-12 px-20 py-3 whitespace-nowrap rounded-l-xl"
                  style={{ backgroundColor: Color7, color: tempColor7 }}
                >
                  Account management
                </a>
              </div>

              <div className="relative -pb-10 top-10 w-64 left-3 ">
                <Link to="/LogoutConfirmation">
                  <img
                    src={Logout}
                    className="w-1/12 h- relative z-10 left-12 filter brightness-75 saturate-125"
                    style={{ top: "228px" }}
                  />
                  <a
                    href=""
                    className="p-2 pl-20 text-center font-semibold relative top-52 px-20 py-3 whitespace-nowrap rounded-xl"
                    style={{ backgroundColor: myCustomColor }}
                  >
                    Logout
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <nav
          className="ml-1/3 z-50 bg-white lg:left-80 fixed lg:h-16 h-40 p-4 lg:p-7 lg:pt-3  w-screen "
          // style={{ backgroundColor: myCustomColor1 }}
        >
          {/* Toogle Menu start */}
          <div className="relative lg:hidden z-40 ">
            {showCloseMenu ? (
              <FontAwesomeIcon
                className="text-black h-6 z-10"
                icon={faClose}
                onClick={toggleMenu}
              />
            ) : (
              <FontAwesomeIcon
                className="text-black h-6 z-20"
                icon={faBars}
                onClick={toggleMenu}
              />
            )}
            {openMenu && (
              <div
                className="fixed top-0 left-0 w-[100%] h-[100%] bg-black opacity-70   via-transparent from-gray-100 to-gray-100"
                onClick={toggleMenu}
              />
            )}
            <div className="z-10 absolute right-40 md:right-[70%]">
              {openMenu && <DropdownMenu />}
            </div>
          </div>
          {/* Toogle Menu end */}
          {InitNav && (
            <div className="relative lg:-top-1 top-10 right-4 ml-5">
              <p>{WelcomeText}</p>
              <h1 className="font-semibold text-lg">{NavText}</h1>
            </div>
          )}
          {AltNav && (
            <div className="relative lg:-top-1 top-20 right-4 ml-5">
              <p>{WelcomeText}</p>
              <h1 className="font-semibold text-lg mt-6 -top-6 -ml-1 lg:-ml-0 lg:-top-3 relative">
                {NavText}
              </h1>
            </div>
          )}
          <img
            className="lg:hidden h-8 w-20 ml-16 mt-12 relative md:ml-20 -top-32 right-9 object-contain"
            src={Logo}
          />

          <div className="flex relative -top-40 left-[25%]  md:left-[65%] ml-10 lg:left-1/3 w-20 lg:-top-14 mt-2 ">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="lg:-mr-10 relative left-12 text-lg lg:text-sm lg:mt-3 z-10 text-gray-500"
            />
            <input
              placeholder="Search"
              type="search"
              className="lg:block hidden px-16 h-9 mr-10 pl-8 relative left-16 rounded-md focus:outline-none "
              style={{ backgroundColor: myCustomColor }}
            />
            <div className="flex w-96 space-x-2 justify-center items-center  relative left-24 -top-2 ">
              <img src={Notification} className="h-5 w-1/2" />
              <sup className="bg-red-600 right-2 -top-3 text-white relative py-2 px-1 rounded-2xl">
                1
              </sup>
              <img
                src={Profile}
                className="lg:w-96 lg:h-3/4 w-9 relative left-"
              />
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-sm relative left-2 cursor-pointer"
              />
            </div>
          </div>
        </nav>
        {showAdditionalDiv && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="relative top-24 left-6 lg:flex lg:space-x-4 ">
              <div className="lg:px-14 px-12 w-[88%] lg:w-52 lg:ml-0  -ml-1 bg-white rounded-xl py-8">
                <p className="whitespace-nowrap relative right-6 -top-2 text-xs">
                  Completed requests
                </p>
                <h1 className="text-blue-300 relative right-6 text-2xl font-semibold">
                  06
                </h1>
              </div>
              <div className="lg:px-14 px-12 w-[88%] lg:w-52 lg:ml-0 lg:mt-0 mt-5 -ml-1 bg-white rounded-xl py-8">
                <p className="whitespace-nowrap relative right-6 -top-2 text-xs">
                  Pending requests
                </p>
                <h1 className="text-blue-300 relative right-6 text-2xl font-semibold">
                  08
                </h1>
              </div>
              <div className="lg:px-8 px-6 w-[88%] lg:w-72 lg:ml-0 lg:mt-0 mt-5 -ml-1 bg-white rounded-xl py-8">
                <p className="whitespace-nowrap text-xs relative -top-2">
                  Upcoming scheduled cleaning
                </p>
                <h1 className="text-blue-300 text-2xl font-semibold">12</h1>
              </div>
              <div className="lg:px-16 px-[16%] w-[88%] lg:w-52 md:px-[8%] lg:ml-0 lg:mt-0 mt-5 -ml-1 bg-white rounded-xl py-8">
                <p className="whitespace-nowrap relative right-9 -top-2 text-xs">
                  Total earnings
                </p>
                <h1 className="text-blue-300 relative right-9  text-2xl font-semibold">
                  $24,000
                </h1>
              </div>
            </div>
            <div className="bg-white h-screen-3 lg:w-screen-3 overflow-x-scroll left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <h1 className="font-semibold text-lg">Request history</h1>
              <div
                className="flex mt-9 space-x-24 relative font-semibold py-3 px-4 w-screen-4 lg:w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <p>Client Name</p>
                <p>Date of request</p>
                <p className="relative right-10">Address</p>
                <p className="relative right-4">Service type</p>
                <p>Status</p>
              </div>

              <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 rounded-xl font-semibold">
                  Completed
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Office cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 relative left-2 rounded-xl font-semibold">
                  Completed
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Office cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold relative left-2">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Office cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 rounded-xl font-semibold relative left-2">
                  Completed
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 rounded-xl font-semibold">
                  Completed
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 rounded-xl font-semibold">
                  Completed
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 rounded-xl font-semibold">
                  Completed
                </p>
              </div>
            </div>
          </div>
        )}
        {showAdditionalDiv1 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6 ">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4" />
                Back
              </p>

              <div className="flex space-x-3 relative left-4 text-sm lg:flex-nowrap flex-wrap gap-4">
                <Link to="/CleaningRequest">
                  <p className="cursor-pointer px-5 rounded-md py-2 relative -top-2 bg-white">
                    Completed requests
                  </p>
                </Link>
                <Link to="/PendingRequest">
                  <p className="cursor-pointer text-gray-400">
                    Pending requests
                    <span className="relative left-1 text-xs px-1 bg-red-600 rounded-xl text-white">
                      5
                    </span>
                  </p>
                </Link>
                <Link to="/UpcomingSchedule">
                  <p className="cursor-pointer text-gray-400">
                    Upcoming schedule cleaning
                  </p>
                </Link>
                <Link to="/RequestHistory">
                  <p className="cursor-pointer text-gray-400">
                    Request History
                  </p>
                </Link>
              </div>
            </div>
            <div className="bg-white h-screen-3 mr-7   lg:w-screen-3 overflow-x-scroll left-4 lg:left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <h1 className="font-semibold text-lg">Completed requests</h1>
              <div
                className="flex mt-9 space-x-24 relative font-semibold py-3 px-4 w-screen-4  md:w-screen-5  lg:w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <p className="whitespace-nowrap">Client Name</p>
                <p className="whitespace-nowrap relative -left-14">
                  Completed date
                </p>
                <p className="relative -left-32 whitespace-nowrap">Address</p>
                <p className="relative right-28 whitespace-nowrap">
                  Service type
                </p>
                <p className="whitespace-nowrap relative right-36">Duration</p>
                <p className="whitespace-nowrap relative right-40">
                  Payment status
                </p>
              </div>

              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-red-500 font-semibold px-2 bg-red-50 rounded-xl relative left-10">
                  Unpaid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-red-500 font-semibold px-2 bg-red-50 rounded-xl relative left-10">
                  Unpaid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-red-500 font-semibold px-2 bg-red-50 rounded-xl relative left-10">
                  Unpaid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-red-500 font-semibold px-2 bg-red-50 rounded-xl relative left-10">
                  Unpaid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
            </div>
          </div>
        )}
        {showAdditionalDiv2 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6 ">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4" />
                Back
              </p>

              <div className="flex space-x-3 relative left-4 text-sm lg:flex-nowrap flex-wrap gap-4">
                <Link to="/CleaningRequest">
                  <p className="cursor-pointer text-gray-400">
                    Completed requests
                  </p>
                </Link>
                <p className="cursor-pointer px-5 bg-white py-2 rounded-md relative -top-2">
                  Pending requests{" "}
                  <span className="relative left-1 text-xs px-1 bg-red-600 rounded-xl text-white">
                    5
                  </span>
                </p>
                <Link to="/UpcomingSchedule">
                  <p className="cursor-pointer text-gray-400">
                    Upcoming schedule cleaning
                  </p>
                </Link>
                <Link to="/RequestHistory">
                  <p className="cursor-pointer text-gray-400">
                    Request History
                  </p>
                </Link>
              </div>
            </div>
            <div className="bg-white h-screen-3 mr-7 lg:w-screen-3 overflow-x-scroll left-4 lg:left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <h1 className="font-semibold text-lg">Pending requests</h1>
              <div
                className="flex mt-9 space-x-24 relative font-semibold py-3 px-4 w-screen-4  md:w-screen-5  lg:w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <p className="whitespace-nowrap">Client Name</p>
                <p className="whitespace-nowrap relative -left-14">
                  Scheduled date
                </p>
                <p className="relative -left-32 whitespace-nowrap">Address</p>
                <p className="relative right-28 whitespace-nowrap">
                  Service type
                </p>
                <p className="whitespace-nowrap relative right-36">
                  Special instruction
                </p>
                <p className="whitespace-nowrap relative right-44">Action</p>
              </div>

              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
            </div>
          </div>
        )}
        {showAdditionalDiv3 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4 " />
                Back
              </p>

              <div className="flex space-x-3 text-sm">
                <p className="cursor-pointer bg-white py-3 px-4 left-4 rounded-md relative -top-3">
                  Customer accounts
                </p>

                <Link to="/CleanersAccount">
                  <p className="cursor-pointer px-5  text-gray-400 ">
                    Cleaners accounts{" "}
                    {/* <span className="relative left-1 text-xs px-1 bg-red-600 rounded-xl text-white">
                  5
                </span> */}
                  </p>
                </Link>
                {/* <p className="cursor-pointer text-gray-400">
                Upcoming schedule cleaning
              </p> */}
                <p className="cursor-pointer text-white text-center bg-blue-600 lg:px-10 px-5 py-2 lg:py-3 lg:h-12 lg:relative fixed lg:-mt-5 -mt-36 z-50 lg:left-1/3 left-48 md:left-[75%] font-semibold rounded-lg">
                  Manage requests
                </p>
              </div>
            </div>
            <div className="bg-white h-screen-3 mr-7   lg:w-screen-3 overflow-x-scroll left-4 lg:left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <h1 className="font-semibold text-lg">Customer accounts</h1>
              <div
                className="flex mt-9 space-x-60 relative font-semibold py-3 px-4 w-screen-4  md:w-screen-5  lg:w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <p className="whitespace-nowrap">Client Name</p>
                <p className="whitespace-nowrap relative -left-20">Email</p>
                <p className="relative -left-32 whitespace-nowrap">Address</p>
                {/* <p className="relative right-28 whitespace-nowrap">
                  Service type
                </p>
                <p className="whitespace-nowrap relative right-36">
                  Special instruction
                </p> */}
                <p className="whitespace-nowrap relative right-44">Action</p>
              </div>

              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
            </div>
          </div>
        )}
        {showAdditionalDiv10 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4 " />
                Back
              </p>

              <div className="flex space-x-3 relative left-4 text-sm lg:flex-nowrap flex-wrap gap-4">
                <Link to="/UserManagement">
                  <p className="cursor-pointer px-5  text-gray-400 ">
                    Customer accounts{" "}
                    {/* <span className="relative left-1 text-xs px-1 bg-red-600 rounded-xl text-white">
                  5
                </span> */}
                  </p>
                </Link>
                <p className="cursor-pointer bg-white py-3 px-4 left-4 rounded-md relative -top-3">
                  Cleaners account
                </p>
                {/* <p className="cursor-pointer text-gray-400">
                Upcoming schedule cleaning
              </p> */}
              <p className="cursor-pointer whitespace-nowrap text-white text-center bg-blue-600 lg:px-10 px-5 py-2 lg:py-3 lg:relative fixed lg-mt-0 -mt-36 z-50 lg:left-1/3 left-44 md:left-[71.5%] font-semibold rounded-lg">
                  Approve new cleaners
                </p>
              </div>
            </div>
            <div className="bg-white h-screen-3 mr-7   lg:w-screen-3 overflow-x-scroll left-4 lg:left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <h1 className="font-semibold text-lg">Cleaners accounts</h1>
              <div
                className="flex mt-9 space-x-40 relative font-semibold py-3 px-4 w-screen-4  md:w-screen-5  lg:w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <p className="whitespace-nowrap">Client Name</p>
                <p className="whitespace-nowrap relative -left-24">Email</p>
                <p className="relative -left-28 ml-2 whitespace-nowrap">
                  Address
                </p>
                {/* <p className="relative right-28 whitespace-nowrap">
                  Service type
                </p> */}
                <p className="whitespace-nowrap relative right-44">
                  Availability(Working hours)
                </p>
                <p className="whitespace-nowrap relative right-72">Action</p>
              </div>

              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
            </div>
          </div>
        )}
        {showAdditionalDiv11 && (
          <div className="w-2/5 h-screen-1 bg-white p-8 z-50 top-0 absolute left-1/2 ml-32 rounded-lg">
            <div>
              <FontAwesomeIcon
                icon={faXmark}
                className="border-2 py-1 cursor-pointer border-black px-2 rounded-2xl  font-semibold float-right"
              />
              <div className="relative top-20">
                <p className="absolute  bg-sky-100 px-4 py-1 rounded-2xl -top-10 -left-1">
                  Maryan clark
                </p>
                <p className="font-semibold text-2xl mb-10">
                  Personal information
                </p>
              </div>

              <div>
                <div className="mt-24">
                  <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Samson james"
                    className="border-gray-200 mt-11 -ml-11 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Samjam@gmail.com"
                    className="border-gray-200 mt-11 -ml-11 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <label className="mt-10 top-5 relative whitespace-nowrap font-semibold">
                    Phone number
                  </label>
                  <input
                    type="number"
                    placeholder="+65 89274737383"
                    className="border-gray-200 mt-7 -ml- rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="123 Maple Street..."
                    className="border-gray-200 mt-11 -ml-14 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                    Availability
                  </label>
                  <input
                    type="text"
                    placeholder="09:00AM to 5:00PM"
                    className="border-gray-200 mt-11 -ml-20 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div className="flex">
                <div>
                  <div className="mt-2">
                    <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                      From
                    </label>
                    <input
                      type="text"
                      placeholder="09:00AM"
                      className="border-gray-200 mt-11 -ml-10 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                      style={{ backgroundColor: myCustomColor }}
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <label className="-mt-10 -top-11 -ml-2 relative whitespace-nowrap font-semibold">
                      To
                    </label>
                    <input
                      type="text"
                      placeholder="5:00PM"
                      className="border-gray-200 mt-11 -ml-4 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                      style={{ backgroundColor: myCustomColor }}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="font-semibold text-xl">Services</p>

                <p className="mt-4 mb-2">Services offered</p>
                <div
                  className="w-10/12 rounded-lg border-2 p-5"
                  style={{ backgroundColor: myCustomColor }}
                >
                  <div>
                    <p className="font-semibold">Regular cleaning</p>
                  </div>

                  <div className="mt-5">
                    <p className="font-semibold">Office cleaning</p>
                  </div>

                  <div className="mt-5">
                    <p className="font-semibold">Deep cleaning</p>
                  </div>
                </div>

                <div className="flex relative right-14 top-2 w-">
                  <label className="mt-3 left-14 relative whitespace-nowrap font-semibold">
                    Start date
                  </label>
                  <input
                    type="date"
                    placeholder="Monthly plan"
                    className="border-gray-200 mt-11 -ml-3  rounded-md border-2 text-sm text-black w-screen px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />

                  <label className="mt-3 left-9 relative whitespace-nowrap font-semibold">
                    Renewal date
                  </label>
                  <input
                    type="date"
                    placeholder=""
                    className="border-gray-200 mt-11 -ml-10 relative -left-5 rounded-md border-2 text-sm text-black w-screen px-10 pl-6 py-3 focus:outline-none  "
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>

                <div className="mt-8">
                  <p className="font-semibold text-xl">
                    Schedules and assignments
                  </p>
                  <p className="mt-4 mb-2">Current jobs</p>
                  <div
                    className="w-10/12 h-64 rounded-lg border-2 p-5"
                    style={{ backgroundColor: myCustomColor }}
                  >
                    <div>
                      <p className="font-semibold float-right mt-4">
                        Regular cleaning
                      </p>
                      <p>Date</p>
                      <p className="font-semibold">21st July</p>
                      <p className="font-semibold text-blue-700 px-3 bg-blue-50 rounded-xl float-right">
                        Ongoing
                      </p>
                    </div>

                    <div className="mt-5">
                      <p className="font-semibold float-right mt-5 relative left-20 pl-2">
                        Office cleaning
                      </p>
                      <p>Date</p>
                      <p className="font-semibold">21st July</p>
                      <p className="font-semibold text-blue-700 px-3 bg-blue-50 rounded-xl float-right">
                        Ongoing
                      </p>
                    </div>

                    <div className="mt-5">
                      <p className="font-semibold float-right mt-5 relative left-20 pl-2">
                        Deep cleaning
                      </p>
                      <p>Date</p>
                      <p className="font-semibold">21st July</p>
                      <p className="font-semibold text-blue-700 px-3 bg-blue-50 rounded-xl float-right">
                        Ongoing
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <label className="-mt-10 top-2 relative whitespace-nowrap font-semibold">
                    Availability
                  </label>
                  <Calender />
                </div>

                <div className="space-x-14 mt-12">
                  <button className="px-7 py-2 bg-blue-500 rounded-lg text-white">
                    Assign new job
                  </button>
                  <button className="px-7 py-2 bg-red-600 rounded-lg relative -left-2 text-white">
                    Deactivate cleaner
                  </button>
                </div>
              </div>
            </div>
            <div className="flex space-x-12 mb-10"></div>
          </div>
        )}
        {showAdditionalDiv12 && (
          <div className="w-2/5 h-screen-1 bg-white p-8 z-50 top-0 absolute left-1/2 ml-32 rounded-lg">
            <div>
              <FontAwesomeIcon
                icon={faXmark}
                className="border-2 py-1 cursor-pointer border-black px-2 rounded-2xl  font-semibold float-right"
              />
              <div className="relative top-20">
                <p className="font-semibold text-2xl mb-10">
                  New cleaner approval
                </p>
              </div>

              <div>
                <div className="mt-24">
                  <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Samson james"
                    className="border-gray-200 mt-11 -ml-11 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Samjam@gmail.com"
                    className="border-gray-200 mt-11 -ml-11 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <label className="mt-10 top-5 relative whitespace-nowrap font-semibold">
                    Phone number
                  </label>
                  <input
                    type="number"
                    placeholder="+65 89274737383"
                    className="border-gray-200 mt-7 -ml- rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="123 Maple Street..."
                    className="border-gray-200 mt-11 -ml-14 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>

              <div className="mt-8">
                <div>
                  <div className="mt-2">
                    <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                      Availability
                    </label>
                    <input
                      type="text"
                      placeholder="09:00AM to 5:00PM"
                      className="border-gray-200 mt-11 -ml-20 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                      style={{ backgroundColor: myCustomColor }}
                    />
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <div className="mt-2">
                      <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                        From
                      </label>
                      <input
                        type="text"
                        placeholder="09:00AM"
                        className="border-gray-200 mt-11 -ml-10 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                        style={{ backgroundColor: myCustomColor }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-2">
                      <label className="-mt-10 -top-11 -ml-2 relative whitespace-nowrap font-semibold">
                        To
                      </label>
                      <input
                        type="text"
                        placeholder="5:00PM"
                        className="border-gray-200 mt-11 -ml-4 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                        style={{ backgroundColor: myCustomColor }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="font-semibold text-xl">Services</p>

                  <p className="mt-4 mb-2">Services offered</p>
                  <div
                    className="w-10/12 rounded-lg border-2 p-5"
                    style={{ backgroundColor: myCustomColor }}
                  >
                    <div>
                      <p className="font-semibold">Regular cleaning</p>
                    </div>

                    <div className="mt-5">
                      <p className="font-semibold">Office cleaning</p>
                    </div>

                    <div className="mt-5">
                      <p className="font-semibold">Deep cleaning</p>
                    </div>
                  </div>
                </div>

                <div className="space-x-14 mt-12">
                  <button className="px-8 py-2 bg-blue-500 rounded-lg text-white">
                    Approve cleaner
                  </button>
                  <button className="px-8 py-2 bg-red-600 rounded-lg text-white">
                    Reject cleaner
                  </button>
                </div>
              </div>
            </div>
            <div className="flex space-x-12 mb-10"></div>
          </div>
        )}
        {showAdditionalDiv9 && (
          <div className="w-2/5 h-screen-1 bg-white p-8 z-50 top-0 absolute left-1/2 ml-32 rounded-lg">
            <div>
              <FontAwesomeIcon
                icon={faXmark}
                className="border-2 py-1 cursor-pointer border-black px-2 rounded-2xl  font-semibold float-right"
              />
              <div className="relative top-20">
                <p className="absolute  bg-sky-100 px-4 py-1 rounded-2xl -top-10 -left-1">
                  Samson James
                </p>
                <p className="font-semibold text-2xl mb-10">
                  Personal information
                </p>
              </div>

              <div>
                <div className="mt-24">
                  <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Samson james"
                    className="border-gray-200 mt-11 -ml-11 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Samjam@gmail.com"
                    className="border-gray-200 mt-11 -ml-11 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <label className="mt-10 top-5 relative whitespace-nowrap font-semibold">
                    Phone number
                  </label>
                  <input
                    type="number"
                    placeholder="+65 89274737383"
                    className="border-gray-200 mt-7 -ml- rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="123 Maple Street..."
                    className="border-gray-200 mt-11 -ml-14 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div className="mt-8">
                <p className="font-semibold text-xl">Subscription</p>

                <Planselector />

                <div className="flex relative right-14 top-2 w-">
                  <label className="mt-3 left-14 relative whitespace-nowrap font-semibold">
                    Start date
                  </label>
                  <input
                    type="date"
                    placeholder="Monthly plan"
                    className="border-gray-200 mt-11 -ml-3  rounded-md border-2 text-sm text-black w-screen px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />

                  <label className="mt-3 left-9 relative whitespace-nowrap font-semibold">
                    Renewal date
                  </label>
                  <input
                    type="date"
                    placeholder=""
                    className="border-gray-200 mt-11 -ml-10 relative -left-5 rounded-md border-2 text-sm text-black w-screen px-10 pl-6 py-3 focus:outline-none relative "
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>

                <div className="mt-8">
                  <p className="font-semibold text-xl">Service history</p>
                  <p className="mt-4 mb-2">Service records</p>
                  <div
                    className="w-10/12 rounded-lg border-2 p-5"
                    style={{ backgroundColor: myCustomColor }}
                  >
                    <div>
                      <p className="font-semibold float-right mt-4">
                        Regular cleaning
                      </p>
                      <p>Date</p>
                      <p className="font-semibold">21st July</p>
                    </div>

                    <div className="mt-5">
                      <p className="font-semibold float-right mt-4">
                        Office cleaning
                      </p>
                      <p>Date</p>
                      <p className="font-semibold">21st July</p>
                    </div>

                    <div className="mt-5">
                      <p className="font-semibold float-right mt-4">
                        Deep cleaning
                      </p>
                      <p>Date</p>
                      <p className="font-semibold">21st July</p>
                    </div>
                  </div>
                </div>

                <div className="space-x-14 mt-12">
                  <button className="px-8 py-2 bg-blue-500 rounded-lg text-white">
                    Save changes
                  </button>
                  <button className="px-8 py-2 bg-red-600 rounded-lg text-white">
                    Delete customer
                  </button>
                </div>
              </div>
            </div>
            <div className="flex space-x-12 mb-10"></div>
          </div>
        )}

        {showAdditionalDiv7 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4" />
                Back
              </p>

              <div className="flex space-x-3 relative left-4 text-sm lg:flex-nowrap flex-wrap gap-4">
                <Link to="/CleaningRequest">
                  <p className="cursor-pointer text-gray-400">
                    Completed requests
                  </p>
                </Link>
                <Link to="/PendingRequest">
                  <p className="cursor-pointer text-gray-400">
                    Pending requests{" "}
                    <span className="relative left-3 text-xs px-1 bg-red-600 rounded-xl text-white">
                      5
                    </span>
                  </p>
                </Link>
                <Link to="/UpcomingSchedule">
                  <p className="cursor-pointer px-5 bg-white py-2  rounded-md relative -top-2 lg:left-0 -left-3">
                    Upcoming schedule cleaning
                  </p>
                </Link>
                <Link to="/RequestHistory">
                  <p className="cursor-pointer -ml-6 text-gray-400">
                    Request History
                  </p>
                </Link>
              </div>
            </div>
            <div className="bg-white h-screen-3 mr-7   lg:w-screen-3 overflow-x-scroll left-4 lg:left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <h1 className="font-semibold text-lg">Pending requests</h1>
              <div
                className="flex mt-9 space-x-24 relative font-semibold py-3 px-4 w-screen-4  md:w-screen-5  lg:w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <p className="whitespace-nowrap">Client Name</p>
                <p className="whitespace-nowrap relative -left-14">
                  Scheduled date
                </p>
                <p className="relative -left-32 whitespace-nowrap">Address</p>
                <p className="relative right-28 whitespace-nowrap">
                  Service type
                </p>
                <p className="whitespace-nowrap relative right-36">
                  Special instruction
                </p>
                <p className="whitespace-nowrap relative right-44">Status</p>
              </div>

              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p className="font-semibold px-3 w-24 rounded-xl py-1 relative bg-red-50 text-red-600 -left-3">
                  Cancelled
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-black font-semibold px-3 rounded-xl py-1 relative -left-3"
                  style={{ backgroundColor: myCustomColor }}
                >
                  Reschedule
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p className="font-semibold px-3 w-24 rounded-xl py-1 relative bg-red-50 text-red-600 -left-3">
                  Cancelled
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p className="font-semibold px-3 w-24 rounded-xl py-1 relative bg-red-50 text-red-600 -left-3">
                  Cancelled
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-black font-semibold px-3 rounded-xl py-1 relative -left-3"
                  style={{ backgroundColor: myCustomColor }}
                >
                  Reschedule
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p className="font-semibold px-3 w-24 rounded-xl py-1 relative bg-red-50 text-red-600 -left-3">
                  Cancelled
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p className="font-semibold px-3 w-24 rounded-xl py-1 relative bg-red-50 text-red-600 -left-3">
                  Cancelled
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p className="font-semibold px-3 w-24 rounded-xl py-1 relative bg-red-50 text-red-600 -left-3">
                  Cancelled
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p className="font-semibold px-3 w-24 rounded-xl py-1 relative bg-red-50 text-red-600 -left-3">
                  Cancelled
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-black font-semibold px-3 rounded-xl py-1 relative -left-3"
                  style={{ backgroundColor: myCustomColor }}
                >
                  Reschedule
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-black font-semibold px-3 rounded-xl py-1 relative -left-3"
                  style={{ backgroundColor: myCustomColor }}
                >
                  Reschedule
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p className="font-semibold px-3 w-24 rounded-xl py-1 relative bg-red-50 text-red-600 -left-3">
                  Cancelled
                </p>
              </div>
            </div>
          </div>
        )}
        {showAdditionalDiv8 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4" />
                Back
              </p>

              <Link to="/CleaningRequest"></Link>
              <Link to="/PendingRequest"></Link>
              <Link to="/UpcomingSchedule"></Link>
              <div className="flex space-x-3 relative left-4 text-sm lg:flex-nowrap flex-wrap gap-4">
                <Link to="/CleaningRequest">
                  <p className="cursor-pointer text-gray-400">
                    Completed requests
                  </p>
                </Link>
                <Link to="/PendingRequest">
                  <p className="cursor-pointer text-gray-400">
                    Pending requests{" "}
                    <span className="relative left-1 text-xs px-1 bg-red-600 rounded-xl text-white">
                      5
                    </span>
                  </p>
                </Link>
                <Link to="/UpcomingSchedule">
                  <p className="cursor-pointer text-gray-400">
                    Upcoming schedule cleaning
                  </p>
                </Link>
                <p className="cursor-pointer px-5 bg-white py-2 lg:right-0 right-4 rounded-md relative -top-2">
                  Request History
                </p>
              </div>
            </div>
            <div className="bg-white h-screen-3 mr-7   lg:w-screen-3 overflow-x-scroll left-4 lg:left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <h1 className="font-semibold text-lg">Request history</h1>
              <div
                className="flex mt-9 space-x-24 relative font-semibold py-3 px-4 w-screen-4  md:w-screen-5  lg:w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <p>Client Name</p>
                <p>Date of request</p>
                <p className="relative right-10">Address</p>
                <p className="relative right-4">Service type</p>
                <p>Status</p>
              </div>

              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 rounded-xl font-semibold">
                  Completed
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Office cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 relative left-2 rounded-xl font-semibold">
                  Completed
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Office cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold relative left-2">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Office cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 rounded-xl font-semibold relative left-2">
                  Completed
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 rounded-xl font-semibold">
                  Completed
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 rounded-xl font-semibold">
                  Completed
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 rounded-xl font-semibold">
                  Completed
                </p>
              </div>
            </div>
          </div>
        )}

        {showAdditionalDiv13 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4 " />
                Back
              </p>

              <div className="flex space-x-3 relative left-4 text-sm lg:flex-nowrap flex-wrap gap-4">
                <p className="cursor-pointer bg-white py-3 px-4 left-4 rounded-md relative -top-3">
                  Overview
                  {/* <span className="relative left-1 text-xs px-1 bg-red-600 rounded-xl text-white">
                  5
                </span> */}
                </p>
                <p className="cursor-pointer px-5  text-gray-400 ">
                  Payment history
                </p>
                {/* <p className="cursor-pointer text-gray-400">
                Upcoming schedule cleaning
              </p> */}
                <p className="cursor-pointer text-gray-400 text-center  px-8 py-3 relative -mt-3 right-8 font-semibold rounded-lg">
                  Invoices
                </p>
              </div>
            </div>
            <div className="bg-white h-screen-3 mr-7   lg:w-screen-3 overflow-x-scroll left-4 lg:left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <h1 className="font-semibold text-lg">Available jobs</h1>
              <div
                className="flex mt-9 space-x-24 relative font-semibold py-3 px-4 w-screen-4  md:w-screen-5  lg:w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <p className="whitespace-nowrap">Job ID</p>
                <p className="whitespace-nowrap relative -left-3">
                  Client Name
                </p>
                <p className="whitespace-nowrap relative -left-16">Address</p>

                <p className="relative right-24 whitespace-nowrap">
                  Service type
                </p>
                <p className="relative -left-36 ml-2 whitespace-nowrap">
                  Special instruction
                </p>
                <p className="whitespace-nowrap relative right-56">
                  Scheduled date
                </p>
                <p className="whitespace-nowrap relative right-1/3 ml-40">
                  Action
                </p>
              </div>
              <div className="text-sm relative -left-3">
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {showAdditionalDiv14 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6 ">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4 " />
                Back
              </p>

              <div className="flex space-x-3 ">
                <p className="cursor-pointer px-5  text-gray-400 ">
                  Assign Jobs
                </p>
                <p className="cursor-pointer bg-white py-3 px-4 left-4 rounded-md relative -top-3">
                  Monitor Job status
                  {/* <span className="relative left-1 text-xs px-1 bg-red-600 rounded-xl text-white">
                  5
                </span> */}
                </p>
                {/* <p className="cursor-pointer text-gray-400">
                Upcoming schedule cleaning
              </p> */}
                {/* <p className="cursor-pointer text-gray-400 text-center  px-8 py-3 relative -mt-3 right-8 font-semibold rounded-lg">
                Invoices
              </p> */}
              </div>
            </div>
            <div className="bg-white h-screen-3 mr-7   lg:w-screen-3 overflow-x-scroll left-4 lg:left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <h1 className="font-semibold text-lg">Ongoing Jobs</h1>
              <div
                className="flex mt-9 space-x-24 relative font-semibold py-3 px-4 w-screen-4  md:w-screen-5  lg:w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <p className="whitespace-nowrap">Job ID</p>
                <p className="whitespace-nowrap relative -left-3">
                  Client Name
                </p>
                <p className="whitespace-nowrap relative -left-16">Address</p>

                <p className="relative right-24 whitespace-nowrap">
                  Service type
                </p>
                <p className="relative -left-36 ml-2 whitespace-nowrap">
                  Assigned cleaner
                </p>
                <p className="whitespace-nowrap relative right-56">
                  Scheduled date
                </p>
                <p className="whitespace-nowrap relative right-1/3 ml-40">
                  Status
                </p>
              </div>
              <div className="text-sm relative -left-3">
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 whitespace-nowrap bg-blue-50"
                    style={{ color: myCustomColor4 }}
                  >
                    In progress
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 -ml-12 whitespace-nowrap bg-green-50"
                    style={{ color: myCustomColor2 }}
                  >
                    Completed
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 whitespace-nowrap bg-blue-50"
                    style={{ color: myCustomColor4 }}
                  >
                    In progress
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 whitespace-nowrap bg-blue-50"
                    style={{ color: myCustomColor4 }}
                  >
                    In progress
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 -ml-12 whitespace-nowrap bg-green-50"
                    style={{ color: myCustomColor2 }}
                  >
                    Completed
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 -ml-12 whitespace-nowrap bg-green-50"
                    style={{ color: myCustomColor2 }}
                  >
                    Completed
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 whitespace-nowrap bg-blue-50"
                    style={{ color: myCustomColor4 }}
                  >
                    In progress
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 -ml-12 whitespace-nowrap bg-green-50"
                    style={{ color: myCustomColor2 }}
                  >
                    Completed
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 -ml-12 whitespace-nowrap bg-green-50"
                    style={{ color: myCustomColor2 }}
                  >
                    Completed
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 whitespace-nowrap bg-blue-50"
                    style={{ color: myCustomColor4 }}
                  >
                    In progress
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 -ml-12 whitespace-nowrap bg-green-50"
                    style={{ color: myCustomColor2 }}
                  >
                    Completed
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 whitespace-nowrap bg-blue-50"
                    style={{ color: myCustomColor4 }}
                  >
                    In progress
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {showAdditionalDiv15 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4" />
                Back
              </p>

              <div className="flex space-x-3 relative left-4 text-sm lg:flex-nowrap flex-wrap gap-4">
                <Link to="/FinancialManagement">
                  <p className="cursor-pointer px-5 rounded-md py-2 relative -top-2 bg-white">
                    Overview
                  </p>
                </Link>
                <Link to="/PaymentHistory">
                  <p className="cursor-pointer text-gray-400">
                    Payment history
                  </p>
                </Link>
                <Link to="/Invoices">
                  <p className="cursor-pointer text-gray-400">Invoices</p>
                </Link>
              </div>
            </div>
            <div className="relative top-40 left-6 lg:left-10 lg:flex lg:space-x-12 ">
              <div className="px-24 bg-white  w-[88%] lg:w-[20.5%] rounded-xl py-8 lg:mb-10 mb-5">
                <p className="whitespace-nowrap relative right-16 -top-2 text-xs">
                  Outstanding payment
                </p>
                <h1 className="text-blue-300 relative right-16 text-2xl font-semibold">
                  $44,000
                </h1>
              </div>
              <div className="px-24 bg-white  w-[88%] lg:w-[20.5%] rounded-xl py-8 lg:mb-10 mb-5">
                <p className="whitespace-nowrap relative right-16 -top-2 text-xs">
                  Total paid
                </p>
                <h1 className="text-blue-300 relative right-16 text-2xl font-semibold">
                  $13,000
                </h1>
              </div>
              <div className="px-24 bg-white  w-[88%] lg:w-[20.5%] rounded-xl py-8 lg:mb-10 mb-10">
                <p className="whitespace-nowrap text-xs right-16 relative -top-2">
                  Total revenue
                </p>
                <h1 className="text-blue-300 text-2xl right-16 relative font-semibold">
                  $57,000
                </h1>
              </div>
            </div>
            <div className="bg-white h-screen-3 mr-7   lg:w-screen-3 overflow-x-scroll left-4 lg:left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <h1 className="font-semibold text-lg">Overview</h1>
              <div
                className="flex mt-9 space-x-24 relative font-semibold py-3 px-4 w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <p className="whitespace-nowrap">Client Name</p>
                <p className="whitespace-nowrap relative -left-14">
                  Completed date
                </p>
                <p className="relative -left-32 whitespace-nowrap">Address</p>
                <p className="relative right-28 whitespace-nowrap">
                  Service type
                </p>
                <p className="whitespace-nowrap relative right-36">Duration</p>
                <p className="whitespace-nowrap relative right-40">
                  Payment status
                </p>
              </div>

              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-red-500 font-semibold px-2 bg-red-50 rounded-xl relative left-10">
                  Unpaid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-red-500 font-semibold px-2 bg-red-50 rounded-xl relative left-10">
                  Unpaid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-red-500 font-semibold px-2 bg-red-50 rounded-xl relative left-10">
                  Unpaid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-red-500 font-semibold px-2 bg-red-50 rounded-xl relative left-10">
                  Unpaid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
            </div>
          </div>
        )}

        {showAdditionalDiv16 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6 ">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4" />
                Back
              </p>

              <div className="flex space-x-3 relative left-4 text-sm">
                <Link to="/FinancialManagement">
                  <p className="cursor-pointer text-gray-400">Overview</p>
                </Link>
                <Link to="/PaymentHistory">
                  <p className="cursor-pointer px-5 rounded-md py-2 relative -top-2 bg-white">
                    Payment history
                  </p>
                </Link>
                <Link to="/Invoices">
                  <p className="cursor-pointer text-gray-400">Invoices</p>
                </Link>
              </div>
            </div>

            <div className="bg-white h-screen-3 mr-7   lg:w-screen-3 overflow-x-scroll left-4 lg:left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <h1 className="font-semibold text-lg">Payment history</h1>
              <div
                className="flex mt-9 space-x-24 relative font-semibold py-3 px-4 w-screen-4  md:w-screen-5  lg:w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <p className="whitespace-nowrap">Client Name</p>
                {/* <p className="whitespace-nowrap relative -left-14">
                  Completed date
                </p> */}
                <p className="relative -left- whitespace-nowrap">Invoice ID</p>
                <p className="relative right- whitespace-nowrap">Amount</p>
                <p className="whitespace-nowrap relative left-2">
                  Payment Date
                </p>
                <p className="whitespace-nowrap relative left-7">
                  Payment status
                </p>
              </div>

              <div className="flex mt-1 space-x-12 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative left-8 whitespace-nowrap">
                  #83884738920
                </p>
                <p className="relative left-12">$150</p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative left-32 whitespace-nowrap">21st July</p>
                <p className="text-red-500 font-semibold px-2 bg-red-50 rounded-xl relative left-60">
                  Outstanding
                </p>
              </div>
              <div className="flex mt-1 space-x-12 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative left-8 whitespace-nowrap">
                  #83884738920
                </p>
                <p className="relative left-12">$150</p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative left-32 whitespace-nowrap">21st July</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-60">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-12 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative left-8 whitespace-nowrap">
                  #83884738920
                </p>
                <p className="relative left-12">$150</p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative left-32 whitespace-nowrap">21st July</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-60">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-12 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative left-8 whitespace-nowrap">
                  #83884738920
                </p>
                <p className="relative left-12">$150</p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative left-32 whitespace-nowrap">21st July</p>
                <p className="text-red-500 font-semibold px-2 bg-red-50 rounded-xl relative left-60">
                  Outstanding
                </p>
              </div>
              <div className="flex mt-1 space-x-12 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative left-8 whitespace-nowrap">
                  #83884738920
                </p>
                <p className="relative left-12">$150</p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative left-32 whitespace-nowrap">21st July</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-60">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-12 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative left-8 whitespace-nowrap">
                  #83884738920
                </p>
                <p className="relative left-12">$150</p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative left-32 whitespace-nowrap">21st July</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-60">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-12 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative left-8 whitespace-nowrap">
                  #83884738920
                </p>
                <p className="relative left-12">$150</p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative left-32 whitespace-nowrap">21st July</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-60">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-12 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative left-8 whitespace-nowrap">
                  #83884738920
                </p>
                <p className="relative left-12">$150</p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative left-32 whitespace-nowrap">21st July</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-60">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-12 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative left-8 whitespace-nowrap">
                  #83884738920
                </p>
                <p className="relative left-12">$150</p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative left-32 whitespace-nowrap">21st July</p>
                <p className="text-red-500 font-semibold px-2 bg-red-50 rounded-xl relative left-60">
                  Outstanding
                </p>
              </div>
              <div className="flex mt-1 space-x-12 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative left-8 whitespace-nowrap">
                  #83884738920
                </p>
                <p className="relative left-12">$150</p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative left-32 whitespace-nowrap">21st July</p>
                <p className="text-red-500 font-semibold px-2 bg-red-50 rounded-xl relative left-60">
                  Outstanding
                </p>
              </div>
              <div className="flex mt-1 space-x-12 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative left-8 whitespace-nowrap">
                  #83884738920
                </p>
                <p className="relative left-12">$150</p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative left-32 whitespace-nowrap">21st July</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-60">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-12 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative left-8 whitespace-nowrap">
                  #83884738920
                </p>
                <p className="relative left-12">$150</p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative left-32 whitespace-nowrap">21st July</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-60">
                  Paid
                </p>
              </div>
            </div>
          </div>
        )}

        {showAdditionalDiv17 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6 ">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4" />
                Back
              </p>

              <div className="flex space-x-3 relative left-4 text-sm lg:flex-nowrap flex-wrap gap-4">
                <Link to="/FinancialManagement">
                  <p className="cursor-pointer text-gray-400">Overview</p>
                </Link>
                <Link to="/PaymentHistory">
                  <p className="cursor-pointer text-gray-400">
                    Payment history
                  </p>
                </Link>
                <Link to="/Invoices">
                  <p className="cursor-pointer px-5 rounded-md py-2 relative -top-2 bg-white">
                    Invoices{" "}
                  </p>
                </Link>
              </div>
            </div>

            <div className="bg-white h-screen-3 mr-7   lg:w-screen-3 overflow-x-scroll left-4 lg:left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <h1 className="font-semibold text-lg">Invoices</h1>
              <div
                className="flex mt-9 space-x-28 relative font-semibold py-3 px-4 w-screen-4  md:w-screen-5  lg:w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <p className="whitespace-nowrap">Date</p>
                <p className="whitespace-nowrap relative -left-12">
                  Invoice ID
                </p>
                <p className="relative right-20 whitespace-nowrap">
                  Service type
                </p>
                <p className="relative -left-28 whitespace-nowrap">Amount</p>
                <p className="whitespace-nowrap relative right-28">
                  Payment status
                </p>
                <p className="whitespace-nowrap relative right-40">Action</p>
              </div>

              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="relative whitespace-nowrap">21st July</p>
                <p className="whitespace-nowrap">83884738920</p>
                <p className="relative left-4 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="text-red-500 font-semibold px-2 bg-red-50 rounded-xl py-1 relative left-6">
                  Outstanding
                </p>
                <p
                  className="relative left-16 whitespace-nowrap py-1 text-white px-4 rounded-lg"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View
                </p>
              </div>
              <div className="flex mt-1 space-x-9 relative py-3 px-4">
                <p className="relative whitespace-nowrap">21st July</p>
                <p className="whitespace-nowrap relative left-1">83884738920</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-10">123 Maple Street...</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl py-1 relative left-10">
                  Paid
                </p>
                <p
                  className="relative left-36 whitespace-nowrap py-1 text-white px-4 rounded-lg"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View
                </p>
              </div>
              <div className="flex mt-1 space-x-9 relative py-3 px-4">
                <p className="relative whitespace-nowrap">21st July</p>
                <p className="whitespace-nowrap relative left-1">83884738920</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-10">123 Maple Street...</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl py-1 relative left-10">
                  Paid
                </p>
                <p
                  className="relative left-36 whitespace-nowrap py-1 text-white px-4 rounded-lg"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="relative whitespace-nowrap">21st July</p>
                <p className="whitespace-nowrap">83884738920</p>
                <p className="relative left-4 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="text-red-500 font-semibold px-2 bg-red-50 rounded-xl py-1 relative left-6">
                  Outstanding
                </p>
                <p
                  className="relative left-16 whitespace-nowrap py-1 text-white px-4 rounded-lg"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View
                </p>
              </div>
              <div className="flex mt-1 space-x-9 relative py-3 px-4">
                <p className="relative whitespace-nowrap">21st July</p>
                <p className="whitespace-nowrap relative left-1">83884738920</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-10">123 Maple Street...</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl py-1 relative left-10">
                  Paid
                </p>
                <p
                  className="relative left-36 whitespace-nowrap py-1 text-white px-4 rounded-lg"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View
                </p>
              </div>
              <div className="flex mt-1 space-x-9 relative py-3 px-4">
                <p className="relative whitespace-nowrap">21st July</p>
                <p className="whitespace-nowrap relative left-1">83884738920</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-10">123 Maple Street...</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl py-1 relative left-10">
                  Paid
                </p>
                <p
                  className="relative left-36 whitespace-nowrap py-1 text-white px-4 rounded-lg"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View
                </p>
              </div>
              <div className="flex mt-1 space-x-9 relative py-3 px-4">
                <p className="relative whitespace-nowrap">21st July</p>
                <p className="whitespace-nowrap relative left-1">83884738920</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-10">123 Maple Street...</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl py-1 relative left-10">
                  Paid
                </p>
                <p
                  className="relative left-36 whitespace-nowrap py-1 text-white px-4 rounded-lg"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View
                </p>
              </div>
              <div className="flex mt-1 space-x-9 relative py-3 px-4">
                <p className="relative whitespace-nowrap">21st July</p>
                <p className="whitespace-nowrap relative left-1">83884738920</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-10">123 Maple Street...</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl py-1 relative left-10">
                  Paid
                </p>
                <p
                  className="relative left-36 whitespace-nowrap py-1 text-white px-4 rounded-lg"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="relative whitespace-nowrap">21st July</p>
                <p className="whitespace-nowrap">83884738920</p>
                <p className="relative left-4 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="text-red-500 font-semibold px-2 bg-red-50 rounded-xl py-1 relative left-6">
                  Outstanding
                </p>
                <p
                  className="relative left-16 whitespace-nowrap py-1 text-white px-4 rounded-lg"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="relative whitespace-nowrap">21st July</p>
                <p className="whitespace-nowrap">83884738920</p>
                <p className="relative left-4 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="text-red-500 font-semibold px-2 bg-red-50 rounded-xl py-1 relative left-6">
                  Outstanding
                </p>
                <p
                  className="relative left-16 whitespace-nowrap py-1 text-white px-4 rounded-lg"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View
                </p>
              </div>
              <div className="flex mt-1 space-x-9 relative py-3 px-4">
                <p className="relative whitespace-nowrap">21st July</p>
                <p className="whitespace-nowrap relative left-1">83884738920</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-10">123 Maple Street...</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl py-1 relative left-10">
                  Paid
                </p>
                <p
                  className="relative left-36 whitespace-nowrap py-1 text-white px-4 rounded-lg"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View
                </p>
              </div>
              <div className="flex mt-1 space-x-9 relative py-3 px-4">
                <p className="relative whitespace-nowrap">21st July</p>
                <p className="whitespace-nowrap relative left-1">83884738920</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-10">123 Maple Street...</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl py-1 relative left-10">
                  Paid
                </p>
                <p
                  className="relative left-36 whitespace-nowrap py-1 text-white px-4 rounded-lg"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View
                </p>
              </div>
            </div>
          </div>
        )}

        {showAdditionalDiv18 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4 " />
                Back
              </p>

              <div className="flex space-x-3 text-sm">
                <p className="cursor-pointer bg-white py-3 px-4 left-4 rounded-md relative -top-3">
                  Customer inquiries
                </p>

                <Link to="/ComplaintResolution">
                  <p className="cursor-pointer px-5  text-gray-400 ">
                    Complaint resolution{" "}
                    {/* <span className="relative left-1 text-xs px-1 bg-red-600 rounded-xl text-white">
                  5
                </span> */}
                  </p>
                </Link>
                {/* <p className="cursor-pointer text-gray-400">
                Upcoming schedule cleaning
              </p> */}
                {/* <p className="cursor-pointer text-white text-center bg-blue-600 px-10 py-3 relative left-1/3 font-semibold rounded-lg">
                  Manage requests
                </p> */}
              </div>
            </div>
            <div className="bg-white h-screen-3 mr-7   lg:w-screen-3 overflow-x-scroll left-4 lg:left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <h1 className="font-semibold text-lg">Customer inquiries</h1>
              <div
                className="flex mt-9 space-x-52 relative font-semibold py-3 px-4 w-screen-4  md:w-screen-5  lg:w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <p className="whitespace-nowrap">Client Name</p>
                <p className="whitespace-nowrap relative -left-20">
                  Inquiry ID
                </p>
                <p className="relative -left-44 whitespace-nowrap">
                  Date of inquiry
                </p>
                {/* <p className="relative right-28 whitespace-nowrap">
                  Service type
                </p>
                <p className="whitespace-nowrap relative right-36">
                  Special instruction
                </p> */}
                <p className="whitespace-nowrap relative right-44">Action</p>
              </div>

              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}

                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View details
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View details
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View details
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View details
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View details
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View details
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View details
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View details
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View details
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View details
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View details
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View details
                </p>
              </div>
            </div>
          </div>
        )}

        {showAdditionalDiv19 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4 " />
                Back
              </p>

              <div className="flex space-x-3 relative left-4 text-sm lg:flex-nowrap flex-wrap gap-4">
                <Link to="/CustomerSupport">
                  <p className="cursor-pointer px-5  text-gray-400 ">
                    Customer inquiries
                  </p>
                </Link>

                <Link to="/CleanersAccount">
                  <p className="cursor-pointer bg-white py-3 px-4 left-4 rounded-md relative -top-3">
                    Complaint resolution{" "}
                    {/* <span className="relative left-1 text-xs px-1 bg-red-600 rounded-xl text-white">
                  5
                </span> */}
                  </p>
                </Link>
                {/* <p className="cursor-pointer text-gray-400">
                Upcoming schedule cleaning
              </p> */}
                {/* <p className="cursor-pointer text-white text-center bg-blue-600 px-10 py-3 relative left-1/3 font-semibold rounded-lg">
                  Manage requests
                </p> */}
              </div>
            </div>
            <div className="bg-white h-screen-3 mr-7   lg:w-screen-3 overflow-x-scroll left-4 lg:left-6 pl-4 pt-9 relative top-36 whitespace-nowrap">
              <h1 className="font-semibold text-lg">Customer inquiries</h1>
              <div
                className="flex mt-9 space-x-52 relative font-semibold py-3 px-4 w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <p className="whitespace-nowrap">Client Name</p>
                <p className="whitespace-nowrap relative -left-20">
                  Inquiry ID
                </p>
                <p className="relative -left-44 whitespace-nowrap">
                  Date of inquiry
                </p>
                {/* <p className="relative right-28 whitespace-nowrap">
                  Service type
                </p>
                <p className="whitespace-nowrap relative right-36">
                  Special instruction
                </p> */}
                <p className="whitespace-nowrap relative right-44">Action</p>
              </div>

              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}

                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  Resolved
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  Resolved
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <Link to="/CustomDetails" className="cursor-pointer">
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    View details
                  </p>
                </Link>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View details
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View details
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  Resolved
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View details
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  Resolved
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View details
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  Resolved
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  Resolved
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  #8384738920
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  Tomorrow, 10:00 AM
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-28 whitespace-nowrap"
                  style={{ backgroundColor: myCustomColor4 }}
                >
                  View details
                </p>
              </div>
            </div>
          </div>
        )}

        {showAdditionalDiv20 && (
          <div
            className="w- lg:h-screen-2 top-24 lg:top-0 lg:z-30 relative lg:left-80 whitespace-nowrap"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative lg:left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4 " />
                Back
              </p>

              <div className="flex space-x-3 text-sm">
                {/* <p  className="cursor-pointer px-5  text-gray-400 ">
                  Customer inquiries
                </p> */}

                <Link to="/AnalyticsAndInsights">
                  <p className="cursor-pointer bg-white py-3 px-4 left-4 rounded-md relative -top-3">
                    User Behavior Analysis{" "}
                    {/* <span className="relative left-1 text-xs px-1 bg-red-600 rounded-xl text-white">
                  5
                </span> */}
                  </p>
                </Link>
                {/* <p className="cursor-pointer text-gray-400">
                Upcoming schedule cleaning
              </p> */}
                {/* <p className="cursor-pointer text-white text-center bg-blue-600 px-10 py-3 relative left-1/3 font-semibold rounded-lg">
                  Manage requests
                </p> */}
              </div>
            </div>
            <h1 className="font-semibold text-lg relative left-10 top-36">
              Overall company performance
            </h1>
            <div className="flex h-screen-3 space-x-4 flex-wrap w-screen-3  pl-4 pt-9 relative top-36">
              <div className="w-72 p-6 bg-white h-80 rounded-lg">
                <p className="font-semibold">Revenue trends</p>

                <p className="text-green-500 bg-green-50 mt-3 w-20 py-1 text-center px-1 font-semibold whitespace-nowrap rounded-2xl">
                  <FontAwesomeIcon icon={faArrowUp} className="w-5" />
                  12.5%
                </p>
              </div>
              <div className="w-72 p-6 bg-white h-80 rounded-lg">
                <p className="font-semibold">Customer retention rate</p>
                <p className="text-green-500 bg-green-50 mt-3 w-20 py-1 text-center font-semibold px-1 whitespace-nowrap rounded-2xl">
                  <FontAwesomeIcon icon={faArrowUp} className="w-5" />
                  12.5%
                </p>
              </div>
              <div className="w-72 p-6 bg-white h-80 rounded-lg">
                <p className="font-semibold">Customer satisfaction</p>
              </div>
              <div className="w-96 p-6 relative -top-16 right-4 h-96 bg-white rounded-lg">
                <p className="font-semibold">Service usage</p>

                <div
                  className="w-84 p-2 relative top-64 rounded-lg h-10 py-1"
                  style={{ backgroundColor: myCustomColor }}
                >
                  <p className="float-right font-semibold">Office cleaning</p>
                  <p>Most used service</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DashboardTemp;
