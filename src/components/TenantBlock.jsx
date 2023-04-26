import React, { useState } from "react";
import Delete from "./Delete";
import BackDrop from "./BackDrop";




function TenantBlock({ name, BlockNo, RoomNo, }) {

  const [deleteOpen, setDeleteOpen] = useState(false);

  const deleteHandler = ()=>{
    setDeleteOpen(true);
  }
  const closeDeleteHandler=()=>{
    setDeleteOpen(false);
  }
  
function TenantButton({ type,buttonColor,onPop}) {
  return <button   onClick={onPop} className={`  al:p-2 h-10 w-24   ${buttonColor} rounded-lg`}>{type}</button>;
}
  

  return (
    
   <div>
    
    
    {/* tenant block for smaller devices from 280 to 768 */}
     <div className="bg-slate-200  w-full rounded-lg p-2 my-2 ml-4 h-full justify-between md:hidden flex flex-col shadow-md">
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
        <TenantButton type={"View "} buttonColor={'bg-blue-300'} />
        <TenantButton type={"Update "} buttonColor={'bg-green-400'} />
        <TenantButton   type={"Remove"}  buttonColor={'bg-red-400'}   />
       
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
        <TenantButton type={"View "} buttonColor={'bg-blue-300'} />
        <TenantButton type={"Update "} buttonColor={'bg-green-400'} />
        <TenantButton type={"Remove"} buttonColor={'bg-red-400'}   onPop={deleteHandler} />
      </div>

    </div>
      {/* { deleteOpen && <Delete  onCancel={closeDeleteHandler}  />} */}
    { deleteOpen && <BackDrop onCancel={closeDeleteHandler} />}
   
   </div>
  );
}

export default TenantBlock;
