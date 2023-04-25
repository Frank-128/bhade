import React, { useState } from "react";
import { todos } from "../assets/data";
import Tasks from "../components/Tasks";

function TodoList() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex flex-col  ">
      <div className="bg-gray-100 pl-16">
        <button
          className={` rounded p-3 m-3 ${
            activeTab === "tab1" ? "bg-orange-300 " : "bg-slate-300"
          }`}
          onClick={() => handleClick("tab1")}
        >
          All Tasks
        </button>
        <button
          className={` rounded  p-3 m-3 ${
            activeTab === "tab2" ? "bg-orange-300" : "bg-slate-300"
          }`}
          onClick={() => handleClick("tab2")}
        >
          Complete Tasks
        </button>
        <button
          className={` rounded p-3 m-3 ${
            activeTab === "tab3" ? "bg-orange-300" : "bg-slate-300"
          }`}
          onClick={() => handleClick("tab3")}
        >
          Pending Tasks
        </button>
      </div>
      <div className="bg-slate-200 pl-16 h-screen overflow-y-scroll">
        {activeTab === "tab1" && <Tasks task={"all"} />}
        {activeTab === "tab2" && <Tasks task={"complete"} />}
        {activeTab === "tab3" && <Tasks task={"pending"} />}
      </div>
    </div>
  );
}

export default TodoList;
