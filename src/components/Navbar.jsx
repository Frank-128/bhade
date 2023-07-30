import {
  Close,
  Logout,
  Menu,
  Notifications,
  Search,
  Settings,
} from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../App.css";

function Navbar({ isOpen, setIsOpen, handleActive }) {
  const navigate = useNavigate();
  const [openNotification,setOpenNotification] = useState(false);
  const notificationRef = useRef(null)
 
  useEffect(()=>{
   function handleOutsideClick(e){
  
     if(notificationRef && !notificationRef.current.contains(e.target) && !e.target.parentNode.classList.contains("css-i4bv87-MuiSvgIcon-root") && !e.target.classList.contains('notification')){
      setOpenNotification(false)
      }
    }
    document.addEventListener('click',handleOutsideClick)
    return ()=> document.removeEventListener('click',handleOutsideClick)

    
  },[])
  
 
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
         {/* div for menu */}
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
          <div className="flex items-center  justify-between gap-3">
            <button  onClick={()=>setOpenNotification(!openNotification)} className="notification p-4 z-50 bg-transparent  w-full h-full cursor-pointer">
           
            <Badge   badgeContent={3}>
                <Notifications onClick={()=>setOpenNotification(!openNotification)} style={{ fontSize: "30px" }} />
              </Badge>
          
            </button>
            <Settings
              onClick={() => {
                navigate("/settings");
                setIsOpen(false);
              }}
              style={{ fontSize: "30px" }}
            />
           
           <Logout  onClick={()=>navigate('/login')} style={{ fontSize: "30px" }} />
           
          </div>
        </div>
      </div>
      {/* Navbar for ml devices and above */}

      <div className="skeleton  bg-slate-200  h-24  w-full   ml:flex al:hidden  justify-between p-5 items-center  ">
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
          <div className="notification" onClick={() =>setOpenNotification(!openNotification)}>
            <Badge badgeContent={3}>
              <Notifications style={{ fontSize: "30px" }} />
            </Badge>
          </div>
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
            onClick={() => navigate("/login")}
            className="mx-1 cursor-pointer"
            style={{ fontSize: "30px" }}
          />
        </div>
      </div>
      
       {openNotification && <div ref={notificationRef} className={`${openNotification?'block':''} `}>
          <div className="ml:w-1/5 w-3/4 ml:h-[36rem] h-[24rem] notification bg-slate-300 absolute z-20  border-4 rounded-xl right-32 al:right-4 p-4 ">
            <p className="text-black ml:text-md text-center  font-bold ">NOTIFICATIONS</p>
            <div className="gap-y-2 flex-col ml:h-[31rem] h-5/6 flex overflow-y-scroll mt-4 hideScroll">
              {Array(10)
                .fill()
                .map((_, i) => (
                  <div className=" rounded-3xl border-2 ml:p-2 border-slate-500 p-3 ml:text-lg">
                    {" "}
                    <p>1. franklin saint rent due is by today</p>{" "}
                  </div>
                ))}
            </div>
          </div>
        </div>}
      
    </div>
  );
}

export default Navbar;
