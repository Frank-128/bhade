import React from "react";

const Delete = (props) => {
  return (
    <div
      className="bg-slate-400 rounded-xl z-40  al:w-3/4 al:h-1/4 sx:w-fit sx:h-fit"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="pt-12 pl-6 pr-6">
        <b>
          <p>Are you sure you want to Delete?</p>
        </b>
      </div>
      <div className="flex justify-between pt-3 px-3 sx:p-6">
        <button
          type="button"
          onClick={props.onDelete}
          className=" border-2 p-2  flex justify-center items-center border-red-500 bg-red-500 rounded-xl w-16"
        >
          <b>Delete</b>
        </button>
        <button
          type="button"
          onClick={props.onCancel}
          className=" border-2 p-2 flex justify-center items-center border-green-500 bg-green-500 rounded-xl w-16"
        >
          <b>Cancel</b>
        </button>
      </div>
    </div>
  );
};

export default Delete;
