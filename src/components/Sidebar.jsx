import {
  AddHome,
  Apartment,
  Home,
  ListAlt,
  PersonAdd,
} from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import BlockListItem from "./BlockListItem";
import { blocks } from "../assets/data";


function Sidebar({ isOpen,setIsOpen,activeItem,handleActive,routePath}) {
  const [miniActive,setMiniActive]= React.useState('')
  const handleMiniActive = (tab)=>{
    setMiniActive(tab)
  }
  const navigate = useNavigate();
  const [openBlocks, setOpenBlocks ] = React.useState(false)
  return (
    <div>
    {/* sidebar for smaller devices from 280px to 768px */}
      <div className={isOpen?" bg-slate-400  static w-screen  ml:hidden  h-screen":" bg-slate-400 fixed hidden  ml:hidden  h-screen"}>
      <ul className="flex flex-col  gap-y-4  ">
        <li>
          <div
            onClick={() => {handleActive("dashboard");navigate('/');setOpenBlocks(false);setIsOpen(false)}}
            className={
              activeItem === "dashboard"
                ? "flex items-center bg-gray-800 p-2 cursor-pointer text-slate-300"
                : "flex items-center  p-2 cursor-pointer "
            }
          >
            <Home style={{ fontSize: "50px" }} />
            { <span className="text-xl">Dashboard</span>}{" "}
          </div>
        </li>
        <li>
          <div
            onClick={() => {handleActive("blocks"); setOpenBlocks(!openBlocks);setIsOpen(true)}}
            className={
              activeItem === "blocks"
                ? "flex items-center bg-gray-800 p-2 cursor-pointer text-slate-300"
                : "flex items-center  p-2 cursor-pointer "
            }
          >
            <Apartment style={{ fontSize: "50px" }} />

            { <span className="text-xl">Block list</span>}
          </div>
          {openBlocks && isOpen && <>
          {
            blocks.map((item)=>{
              return <BlockListItem num={item.No} handleMiniActive={handleMiniActive} miniActive={miniActive} setIsOpen={setIsOpen}/>
            })
          }
          
          </>}

        </li>
        <li>
          <div
            onClick={() => {handleActive("addTenant");navigate('/addTenant');setOpenBlocks(false);setIsOpen(false)}}
            className={
              activeItem === "addTenant"
                ? "flex items-center bg-gray-800 p-2 cursor-pointer text-slate-300"
                : "flex items-center  p-2 cursor-pointer "
            }
          >
            <PersonAdd style={{ fontSize: "50px" }} />
            {<span className="text-xl">Add Tenant</span>}
          </div>
        </li>
        <li>
          <div
            onClick={() => {handleActive("todolist");navigate('/todolist');setOpenBlocks(false);setIsOpen(false)}}
            className={
              activeItem === "todolist"
                ? "flex items-center bg-gray-800 p-2 cursor-pointer text-slate-300"
                : "flex items-center  p-2 cursor-pointer "
            }
          >
            <ListAlt style={{ fontSize: "50px" }} />{" "}
            {<span className="text-xl">Todos</span>}
          </div>
        </li>
        <li>
          <div
            onClick={() => {handleActive("addBlock");navigate('/addBlock');setOpenBlocks(false);setIsOpen(false)}}
            className={
              activeItem === "addBlock"
                ? "flex items-center bg-gray-800 p-2 cursor-pointer text-slate-300"
                : "flex items-center  p-2 cursor-pointer "
            }
          >
            <AddHome style={{ fontSize: "50px" }} />{" "}
            {<span className="text-xl">Add Block</span>}
          </div>
        </li>
      </ul>
    </div>
    {/* sidebar for large devices from 768 and above */}
    <div className=" bg-slate-400 al:hidden ml:block  h-screen ">
      <ul className="flex flex-col  gap-y-4  ">
        <li>
          <div
            onClick={() => {handleActive("dashboard");navigate('/');setOpenBlocks(false)}}
            className={
              activeItem === "dashboard"
                ? "flex items-center bg-gray-800 p-2 cursor-pointer text-slate-300"
                : "flex items-center  p-2 cursor-pointer "
            }
          >
            <Home style={{ fontSize: "50px" }} />
            {isOpen && <span className="text-xl">Dashboard</span>}{" "}
          </div>
        </li>
        <li>
          <div
            onClick={() => {handleActive("blocks"); setOpenBlocks(!openBlocks);setIsOpen(true)}}
            className={
              activeItem === "blocks"
                ? "flex items-center bg-gray-800 p-2 cursor-pointer text-slate-300"
                : "flex items-center  p-2 cursor-pointer "
            }
          >
            <Apartment style={{ fontSize: "50px" }} />

            {isOpen && <span className="text-xl">Block list</span>}
          </div>
          {openBlocks && isOpen && <>
          {
            blocks.map((item)=>{
              return <BlockListItem num={item.No} handleMiniActive={handleMiniActive} miniActive={miniActive} />
            })
          }
          
          </>}

        </li>
        <li>
          <div
            onClick={() => {handleActive("addTenant");navigate('/addTenant');setOpenBlocks(false)}}
            className={
              activeItem === "addTenant"
                ? "flex items-center bg-gray-800 p-2 cursor-pointer text-slate-300"
                : "flex items-center  p-2 cursor-pointer "
            }
          >
            <PersonAdd style={{ fontSize: "50px" }} />
            {isOpen && <span className="text-xl">Add Tenant</span>}
          </div>
        </li>
        <li>
          <div
            onClick={() => {handleActive("todolist");navigate('/todolist');setOpenBlocks(false)}}
            className={
              activeItem === "todolist"
                ? "flex items-center bg-gray-800 p-2 cursor-pointer text-slate-300"
                : "flex items-center  p-2 cursor-pointer "
            }
          >
            <ListAlt style={{ fontSize: "50px" }} />{" "}
            {isOpen && <span className="text-xl">Todos</span>}
          </div>
        </li>
        <li>
          <div
            onClick={() => {handleActive("addBlock");navigate('/addBlock');setOpenBlocks(false)}}
            className={
              activeItem === "addBlock"
                ? "flex items-center bg-gray-800 p-2 cursor-pointer text-slate-300"
                : "flex items-center  p-2 cursor-pointer "
            }
          >
            <AddHome style={{ fontSize: "50px" }} />{" "}
            {isOpen && <span className="text-xl">Add Block</span>}
          </div>
        </li>
      </ul>
    </div>

    </div>
  );
}

export default Sidebar;
