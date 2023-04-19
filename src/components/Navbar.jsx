import {
  Close,
  Logout,
  Menu,
  Notifications,
  Search,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import React, { useState } from "react";

function Navbar({ isOpen, setIsOpen }) {
  return (
    <div className=" ">
      {/* Navbar for small devices */}
      <div className="bg-slate-200 h-fit  md:hidden sx:w-screen al:w-[23.5rem] flex gap-4 flex-col justify-between p-5 items-center  ">
        <p>
          <b className="text-3xl text-orange-600 cursor-pointer">BHADE</b>
        </p>
        {/* div for search */}
        <div className="bg-white w-full flex justify-between items-center">
          <input
            className="outline-none p-2 w-full"
            placeholder="Search..."
            type="search"
          />
          <Search />
        </div>
        {/* div for menu and notifications and logout */}
        <div className="flex items-center  w-full  justify-between">
          <div className="flex items-center  ">
            {isOpen ? (
              <Close
                className="cursor-pointer mr-5 "
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <Menu
                onClick={() => setIsOpen(true)}
                className="mr-5 cursor-pointer  "
              />
            )}
          </div>
          {/* div for notifications and logout */}
          <div className="flex items-center justify-between gap-3">
            <Badge badgeContent={3}>
              <Notifications style={{ fontSize: "30px" }} />
            </Badge>

            <Logout className="" style={{ fontSize: "30px" }} />
          </div>
        </div>
      </div>
      {/* Navbar for md devices and above */}
      <div className="bg-slate-200 h-24  w-full  md:flex al:hidden  justify-between p-5 items-center  ">
        <div className="flex items-center  ">
          {isOpen ? (
            <Close
              className="cursor-pointer mr-5 "
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <Menu
              onClick={() => setIsOpen(true)}
              className="mr-5 cursor-pointer  "
            />
          )}
          <p>
            <b className="text-3xl text-orange-600 cursor-pointer">BHADE</b>
          </p>
        </div>
        <div className="bg-white">
          <input
            className="outline-none p-2"
            placeholder="Search..."
            type="search"
          />
          <Search />
        </div>
        <div className="flex justify-between  gap-4">
          <Badge badgeContent={3}>
            <Notifications style={{ fontSize: "30px" }} />
          </Badge>
          
            <Logout className="mx-1" style={{ fontSize: "30px" }} />
            
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
