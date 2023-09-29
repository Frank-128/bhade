import {
  Close,
  Logout,
  Notifications,
  Search,
  Settings,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../App.css";
import { MenuList, MenuHandler, Menu } from "@material-tailwind/react";
import { useBhadeContext } from "../context/BhadeContext";

function Navbar({ isOpen, setIsOpen,handleActive }) {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [openSmallMenu,setOpenSmallMenu] = useState(false);
  const {notifications} = useBhadeContext()

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
            <Menu  open={openSmallMenu} handler={setOpenSmallMenu} >
              <MenuHandler className='cursor-pointer'>
                <Badge  badgeContent={notifications?.length}>
                  <Notifications style={{ fontSize: "30px" }} />
                </Badge>
              </MenuHandler>
              <MenuList className="bg-slate-300 absolute z-20 outline-none   border-[0.2px] rounded-xl   ">
              <p className="text-black font-bold border-b-[0.3px] outline-none border-slate-500 p-3 text-center">
                      NOTIFICATIONS
                    </p>
                
                   
                    <ul className="gap-y-2 flex-col max-h-[12rem] sm:max-h-[15rem] outline-none  flex overflow-y-scroll mt-4 hideScroll">
                      {notifications
                        .map((item, i) => (
                          <li className="  border-b-[0.2px]   ">
                            {" "}
                            <p className="p-3">
                             {item.task.name}
                            </p>{" "}
                          </li>
                        ))}
                    </ul>
               
              </MenuList>
            </Menu>

            <Settings
              onClick={() => {
                navigate("/settings");
                setIsOpen(false);
              }}
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
            <MenuIcon
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
        <Menu   open={openMenu} handler={setOpenMenu} allowHover>
              <MenuHandler className='cursor-pointer '>
                <Badge  badgeContent={notifications?.length} color="info">
                  <Notifications style={{ fontSize: "30px" }} />
                </Badge>
              </MenuHandler>
              <MenuList className="bg-slate-300 absolute z-20 outline-none   border-[0.2px] rounded-xl   ">
              <p className="text-black font-bold border-b-[0.3px] outline-none border-slate-500 p-3 text-center">
                      NOTIFICATIONS
                    </p>
                
                   
                    <ul className="gap-y-2 flex-col max-h-[15rem] outline-none  flex overflow-y-scroll mt-4 hideScroll">
                      {notifications
                        .map((item, i) => (
                          <li className="  border-b-[0.2px]   ">
                            {" "}
                            <p className="p-3">
                             {item.task.name}
                            </p>{" "}
                          </li>
                        ))}
                    </ul>
                 
                
              </MenuList>
            </Menu>
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
    </div>
  );
}

export default Navbar;
