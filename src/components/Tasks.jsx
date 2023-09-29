import React, { useState } from "react";
import { todos } from "../assets/data";
import ConfirmDialog from "./ConfirmDialog";
import { useEffect } from "react";
import axios from "axios";
import { useBhadeContext } from "../context/BhadeContext";
function Tasks({ task }) {
  const [show, setShow] = useState(false);
 const { todoes,fetchData} = useBhadeContext();

 

  useEffect(()=>{
      fetchData();
  },[])

  
  return (
    <div>
      {task === "all" &&
        todoes?.map((item) => (
          <div className="rounded-xl  m-2 p-3 bg-gray-300">
            <p className=" text-xl">{item.name}</p>
            <div className="flex italic mt-6 text-slate-800 justify-between">
              <span className="">{item.status==1?"Complete":"Pending"}</span>
              <div className=" flex al:flex-col">
                <span>{item.task_time}</span>
              { item.status == 0 &&  <div className='flex justify-end'>
                 <button
                    className="p-2 bg-slate-400 justify-center items-center w-1/2 ml:w-fit flex  rounded-xl"
                    onClick={() => setShow(true)}
                  >
                    Check
                  </button>
                 </div>}
              </div>
            </div>
          </div>
        ))}
      {task === "complete" &&
        todoes
          .filter((item) => item.status === 1)
          .map((item) => (
            <div className="rounded-xl m-2 p-3  bg-gray-300">
              <p className="text-xl">{item.name}</p>
              <div className=" flex items-center italic mt-6 justify-between">
                {item.status?"Completed":"Pending"}
                <div className=" flex   items-center ">
                  <span>{item.task_time}</span>
                 
                </div>
              </div>
            </div>
          ))}
      {task === "pending" &&
        todoes
          .filter((item) => item.status === 0)
          .map((item) => (
            <div className="rounded-xl m-2 p-3  bg-gray-300">
              <p className="text-xl">{item.name} </p>
              <div className="flex mt-6 italic justify-between">
                {item.status?"Complete":"Pending"}
                <div className=" flex al:flex-col  ">
                  <span>{item.task_time}</span>
                 <div className='flex justify-end'>
                 <button
                    className="p-2 bg-slate-400 justify-center items-center w-1/2 ml:w-fit flex  rounded-xl"
                    onClick={() => setShow(true)}
                  >
                    Check
                  </button>
                 </div>
                </div>
              </div>
              {show && (
                <ConfirmDialog item={item} fetchData={fetchData} todoes={todoes} setShow={setShow} />
              )}
            </div>
          ))}
    </div>
  );
}

export default Tasks;
