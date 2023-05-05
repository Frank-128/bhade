import React, { useState } from "react";
import { todos } from "../assets/data";
import Tasks from "../components/Tasks";
import './../App.css'

function TodoList() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex flex-col h-screen ml:w-full al:w-screen">
      <div className="bg-gray-100  al:flex ml:block justify-between al:overflow-x-scroll ml:overflow-hidden hideScroll">
        <button
          className={` rounded p-3 m-3 w-32 ${
            activeTab === "tab1" ? "bg-orange-300 " : "bg-slate-300"
          }`}
          onClick={() => handleClick("tab1")}
        >
          All Tasks
        </button>
        <button
          className={` rounded  p-3 m-3 ml:w-48 al:32 ${
            activeTab === "tab2" ? "bg-orange-300" : "bg-slate-300"
          }`}
          onClick={() => handleClick("tab2")}
        >
          Complete Tasks
        </button>
        <button
          className={` rounded p-3 m-3 w-32 ${
            activeTab === "tab3" ? "bg-orange-300" : "bg-slate-300"
          } `}
          onClick={() => handleClick("tab3")}
        >
          Pending Tasks
        </button>
      </div>
      <div className="bg-slate-200  h-screen overflow-y-scroll">
        {activeTab === "tab1" && <Tasks task={"all"} />}
        {activeTab === "tab2" && <Tasks task={"complete"} />}
        {activeTab === "tab3" && <Tasks task={"pending"} />}
      </div>
    </div>
  );
}

export default TodoList;
