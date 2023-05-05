import React, { useState } from "react";
import { todos } from "../assets/data";
import ConfirmDialog from "./ConfirmDialog";
function Tasks({ task }) {
  const [show, setShow] = useState(false);
  const [todoes, setTodoes] = useState(todos);
  return (
    <div>
      {task === "all" &&
        todoes.map((item) => (
          <div className="rounded-xl  m-2 p-3 bg-gray-300">
            <p className=" text-xl">{item.message}</p>
            <div className="flex italic mt-6 text-slate-800 justify-between">
              <span className="">{item.status}</span>
              <div className=" flex al:flex-col">
                <span>{item.time}</span>
              { item.status ==='pending'&&  <div className='flex justify-end'>
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
          .filter((item) => item.status === "complete")
          .map((item) => (
            <div className="rounded-xl m-2 p-3  bg-gray-300">
              <p className="text-xl">{item.message}</p>
              <div className=" flex items-center italic mt-6 justify-between">
                {item.status}
                <div className=" flex   items-center ">
                  <span>{item.time}</span>
                 
                </div>
              </div>
            </div>
          ))}
      {task === "pending" &&
        todoes
          .filter((item) => item.status === "pending")
          .map((item) => (
            <div className="rounded-xl m-2 p-3  bg-gray-300">
              <p className="text-xl">{item.message} </p>
              <div className="flex mt-6 italic justify-between">
                {item.status}
                <div className=" flex al:flex-col  ">
                  <span>{item.time}</span>
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
                <ConfirmDialog item={item} todoes={todoes} setShow={setShow} />
              )}
            </div>
          ))}
    </div>
  );
}

export default Tasks;
