import React from "react";

const Delete = (props) => {
  return (
    // <div   className="justify-center items-center flex w-full h-screen top-10  fixed  ">
      <div  className="bg-red-400 rounded-xl z-40   " onClick={(e)=>e.stopPropagation()}>
        <div className="pt-12 pl-6 pr-6" >
          <b><p>Are you sure you want to Delete?</p></b>
        </div>
        <div className="flex justify-between pt-12 pb-12 pl-6 pr-6">
          <button type="button" onClick={props.onDelete} className=" border-2 p-1 border-white-400 rounded-xl w-16"><b>Delete</b></button>
          <button type="button" onClick={props.onCancel} className=" border-2 p-1 border-white-400 rounded-xl w-16"><b>Cancel</b></button>
        </div>
      </div>
    
  );
};

export default Delete;
