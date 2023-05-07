import React, { useState } from "react";

import BackDrop from "./BackDrop";

import { useNavigate } from "react-router-dom";

function TenantBlock({ name, BlockNo, RoomNo }) {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const navigate = useNavigate();

  const deleteHandler = () => {
    setDeleteOpen(true);
  };
  const closeDeleteHandler = () => {
    setDeleteOpen(false);
  };
  const onChange = (num) => {
    if (num === 1) {
      navigate("/tenant/4");
    } else if (num === 2) {
      navigate("/editTenant");
    } else if (num === 3) {
      deleteHandler();
    }
  };

  function TenantButton({ type, buttonColor, onPop, onChange }) {
    return (
      <button
        onClick={onPop}
        className={`  al:w-[4.5rem] al:p-2 h-10 sx:w-24 w-20   ${buttonColor} rounded-lg`}
      >
        {type}
      </button>
    );
  }

  return (
    <div>
      {/* tenant block for smaller devices from 280 to 768 */}
      <div className="bg-slate-200 skeleton w-full rounded-lg p-2 my-2  h-full justify-between md:hidden flex flex-col shadow-md">
        <div>
          <p className="text-xl">
            <b>{name}</b>
          </p>
          <span className="text-lg">
            {" "}
            {"Block No : " + BlockNo + " ," + "Room No:" + RoomNo}
          </span>
        </div>

        <div className="flex justify-between  w-full">
          <TenantButton
            type={"View "}
            buttonColor={"bg-blue-300"}
            onPop={() => onChange(1)}
          />
          <TenantButton
            type={"Update "}
            buttonColor={"bg-green-400"}
            onPop={() => onChange(2)}
          />
          <TenantButton
            type={"Remove"}
            buttonColor={"bg-red-400"}
            onPop={() => onChange(3)}
          />

          {/* {deleteOpen && <BackDrop  />} */}
        </div>
      </div>
      {/* tenant block for devices from 767 and above */}
      <div className="bg-slate-200 m-4   rounded-lg p-3 justify-between xs:hidden md:flex shadow-md">
        <div>
          <p className="text-xl">
            <b>{name}</b>
          </p>
          <span className="text-lg">
            {" "}
            {"Block No : " + BlockNo + " ," + "Room No:" + RoomNo}
          </span>
        </div>
        <div className="flex justify-evenly items-center w-96">
          <TenantButton
            type={"View "}
            buttonColor={"bg-blue-300"}
            onPop={() => onChange(1)}
          />
          <TenantButton
            type={"Update "}
            buttonColor={"bg-green-400"}
            onPop={() => onChange(2)}
          />
          <TenantButton
            type={"Remove"}
            buttonColor={"bg-red-400"}
            onPop={() => onChange(3)}
          />
        </div>
      </div>

      {deleteOpen && <BackDrop onCancel={closeDeleteHandler} />}
    </div>
  );
}

export default TenantBlock;
