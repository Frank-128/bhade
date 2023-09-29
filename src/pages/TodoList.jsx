import React, { useState } from "react";
import { todos } from "../assets/data";
import Tasks from "../components/Tasks";
import './../App.css'
import { Add } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { Card, CardHeader, Dialog,CardBody,Input,Button, CardFooter, Typography } from "@material-tailwind/react";
import DialogWithForm from "../components/TodoDialogBox";
import axios from "axios";
import { useBhadeContext } from "../context/BhadeContext";


function TodoList() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [open,setOpen] = useState(false)
  const {todoes} = useBhadeContext()
  const handleClick = (tab) => {
    setActiveTab(tab);
  };

 

  return (
    <div className="flex flex-col h-screen ml:w-full al:w-screen">
      <div className="flex justify-between bg-gray-100">
       <div className="  al:flex justify-between items-center al:overflow-x-scroll ml:overflow-hidden hideScroll ">
         <button
          className={`hover:shadow-lg rounded p-3 m-3 w-32 ${
            activeTab === "tab1" ? "bg-orange-300 " : "bg-slate-300"
          }`}
          onClick={() => handleClick("tab1")}
        >
          All Tasks
        </button>
        <button
          className={`hover:shadow-lg rounded  p-3 m-3 ml:w-48  ${
            activeTab === "tab2" ? "bg-orange-300" : "bg-slate-300"
          }`}
          onClick={() => handleClick("tab2")}
        >
          Completed Tasks
        </button>
        <button
          className={`hover:shadow-lg rounded p-3 m-3 w-48 ${
            activeTab === "tab3" ? "bg-orange-300" : "bg-slate-300"
          } `}
          onClick={() => handleClick("tab3")}
        >
          Pending Tasks
        </button>
       </div>
       <div className="flex items-center justify-center p-8">
        <button onClick={()=>setOpen(true)} className="rounded-md border-[0.4px] p-2 hover:shadow-lg">
          <Add/> New Task
        </button>
       </div>
      </div>
      <div className="bg-slate-200  h-screen overflow-y-scroll">
        {activeTab === "tab1" && <Tasks task={"all"}  />}
        {activeTab === "tab2" && <Tasks task={"complete"}  />}
        {activeTab === "tab3" && <Tasks task={"pending"}  />}
      </div>
   
          <DialogWithForm open={open}  setOpen={setOpen}/>
     
    </div>
  );
}

export default TodoList;
