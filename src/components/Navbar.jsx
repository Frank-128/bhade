import {
  Close,
  Logout,
  Menu,
  Notifications,
  Search,
  Settings,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../App.css";

function Navbar({ isOpen, setIsOpen, window, setWindow, handleActive }) {
  const navigate = useNavigate();

  const setNotificationWindow = () => {
    setWindow(!window);
  };
  return (
    <div className=" ">
      {/* Navbar for small devices */}
      <div className="basis-3/12 bg-slate-200 h-fit  ml:hidden al:w-screen  flex gap-4 flex-col justify-between p-5 items-center  ">
        <p
          onClick={() => {
            handleActive("dashboard");
            navigate("/");
          }}
        >
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
            <Settings
              onClick={() => navigate("/settings")}
              style={{ fontSize: "30px" }}
            />
            <Logout style={{ fontSize: "30px" }} />
          </div>
        </div>
      </div>
      {/* Navbar for ml devices and above */}

      <div className="skeleton bg-slate-200  h-24  w-full   ml:flex al:hidden  justify-between p-5 items-center  ">
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
          <p
            onClick={() => {
              handleActive("dashboard");
              navigate("/");
            }}
          >
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
            <Notifications
              onClick={setNotificationWindow}
              className="cursor-pointer notify"
              style={{ fontSize: "30px" }}
            />
          </Badge>
          <Settings
            onClick={() => {
              navigate("/settings");
              setIsOpen(false);
              handleActive("");
            }}
            className="cursor-pointer"
            style={{ fontSize: "30px" }}
          />
          <Logout
            onClick={() => navigate("./login")}
            className="mx-1 cursor-pointer"
            style={{ fontSize: "30px" }}
          />
        </div>
      </div>
      {window ? (
        <div className="hidden">NOTIFICATION</div>
      ) : (
        <div className="">
          <div className="w-[32rem] h-[36rem] notify bg-slate-300 absolute z-20  border-4 rounded-xl right-32 top-16 p-4 ">
            <p className="text-black text-2xl  font-bold ">NOTIFICATIONS</p>
            <div className="gap-y-2 flex-col h-[31rem] flex overflow-y-scroll mt-4 hideScroll">
              <div className=" rounded-3xl border-2 p-8 border-slate-500  text-2xl">
                {" "}
                <p>1. franklin saint rent due is by today</p>{" "}
              </div>
              <div className=" rounded-3xl border-2 p-8 border-slate-500  text-2xl">
                {" "}
                <p>1. franklin saint rent due is by today</p>{" "}
              </div>
              <div className=" rounded-3xl border-2 p-8 border-slate-500  text-2xl">
                {" "}
                <p>1. franklin saint rent due is by today</p>{" "}
              </div>
              <div className=" rounded-3xl border-2 p-8 border-slate-500  text-2xl">
                {" "}
                <p>1. franklin saint rent due is by today</p>{" "}
              </div>
              <div className=" rounded-3xl border-2 p-8 border-slate-500  text-2xl">
                {" "}
                <p>1. franklin saint rent due is by today</p>{" "}
              </div>
              <div className=" rounded-3xl border-2 p-8 border-slate-500  text-2xl">
                {" "}
                <p>1. franklin saint rent due is by today</p>{" "}
              </div>
              <div className=" rounded-3xl border-2 p-8 border-slate-500  text-2xl">
                {" "}
                <p>1. franklin saint rent due is by today</p>{" "}
              </div>
              <div className=" rounded-3xl border-2 p-8 border-slate-500  text-2xl">
                {" "}
                <p>1. franklin saint rent due is by today</p>{" "}
              </div>
              <div className=" rounded-3xl border-2 p-8 border-slate-500  text-2xl">
                {" "}
                <p>1. franklin saint rent due is by today</p>{" "}
              </div>
              <div className=" rounded-3xl border-2 p-8 border-slate-500  text-2xl">
                {" "}
                <p>1. franklin saint rent due is by today</p>{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
