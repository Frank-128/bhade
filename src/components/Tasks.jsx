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
          <div className="rounded-xl m-2 p-3 bg-gray-300">
            <p className=" text-xl">{item.message}</p>
            <div className="flex items-center text-slate-800 justify-between">
              <span className="">{item.status}</span>
              <div className="mr-6 gap-4 w-1/6 flex justify-between items-center ">
                <span>{item.time}</span>
              { item.status ==='pending'&& <button
                  className="p-2 bg-slate-400 rounded-xl"
                  onClick={() => setShow(true)}
                >
                  Done
                </button>}
              </div>
            </div>
          </div>
        ))}
      {task === "complete" &&
        todoes
          .filter((item) => item.status === "complete")
          .map((item) => (
            <div className="rounded-xl m-2 p-3 bg-gray-300">
              <p className="text-xl">{item.message}</p>
              <div className="flex items-center justify-between">
                {item.status}
                <div className="mr-6 gap-4 w-1/6 flex justify-between items-center ">
                  <span>{item.time}</span>
                  <button
                    className="p-2 bg-slate-400 rounded-xl"
                    onClick={() => setShow(true)}
                  >
                    Done
                  </button>
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
              <div className="flex items-center justify-between">
                {item.status}
                <div className="mr-6 gap-4 w-1/6 flex justify-between items-center ">
                  <span>{item.time}</span>
                  <button
                    className="p-2 bg-slate-400 rounded-xl"
                    onClick={() => setShow(true)}
                  >
                    Done
                  </button>
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
