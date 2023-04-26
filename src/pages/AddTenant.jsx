import React from "react";

const AddTenant = () => {
  return (
    
   <div className="flex items-center justify-center">
     <form className=" flex w-2/3 h-fit bg-slate-300 pb-6 pt-6 flex-col items-center justify-center ">
        <i><p className="pt-8 font-bold">Fill the form to Add a Tenant</p></i>
      <div className="mt-6">
        <label className="block mb-2 font-bold text-sm font-medium " htmlFor="firstname">FirstName:</label>
        <input
          className=" border-2 p-1 border-blue-400 rounded-xl w-64"
          type="text"
          name="firstname"
          id="firstname"
          placeholder="firstname"
        />
      </div>
      <div className="mt-6">
        <label className="block mb-2 font-bold text-sm font-medium "  htmlFor="lastname">LastName:</label>
        <input
          className=" border-2 p-1 border-blue-400 rounded-xl w-64"
          type="text"
          name="lastname"
          id="lastname"
          placeholder="lastname"
        />
      </div>
      <div className="mt-6">
        <label className="block mb-2 font-bold text-sm font-medium " htmlFor="phoneNo">Phone Number:</label>
        <input
          className=" border-2 p-1 border-blue-400 rounded-xl w-64"
          type="text"
          name="phoneNo"
          id="phoneNo"
          placeholder="Phone No."
        />
      </div><br/>
      <div className="mb-6">
        <label className="block mb-2 font-bold text-sm font-medium " htmlFor="phoneNo2">Phone Number(2) (Optional):</label>
        <input
          className=" border-2 p-1 border-blue-400 rounded-xl w-64"
          type="text"
          name="phoneNo2"
          id="phoneNo2"
          placeholder="Phone No."
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-bold text-sm font-medium " htmlFor="contract">Contract:</label>
        <input
          type="file"
          name="contract"
          id="contract"
          className=" border-2 p-1 border-blue-400 rounded-xl w-64"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-bold text-sm font-medium " htmlFor="startDate">Contract StartDate:</label>
        <input
          type="date"
          name="startDate"
          id="startDate"
          className=" border-2 p-1 border-blue-400 rounded-xl w-64"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-bold text-sm font-medium " htmlFor="endDate">Contract EndDate:</label>
        <input
          type="date"
          name="endDate"
          id="endDate"
          className=" border-2 p-1 border-blue-400 rounded-xl w-64"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium font-bold ">Room</label>
        <select className=" border-2  p-1 border-blue-400 rounded-xl w-64">
          <option value="">Block1-Room2</option>
          <option value="">Block2-Room4</option>
          <option value="">Block6-Room3</option>
          <option value="">Block4-Room4</option>
          <option value="">Block1-Room5</option>
        </select>
      </div>
      <div className="">
        <label className="block mb-2 text-sm font-medium font-bold">Current Metre Reading:</label>
        <input
         className=" border-2 p-1 border-blue-400 rounded-xl w-64"
          type="number"
          id="metre"
          placeholder="metre reading"
          name="metre"
        />
      </div><br/>
      <button type="submit" className="border-2 p-1 border-blue-400 bg-slate-400 rounded-xl w-32 ">
        Add Tenant
      </button>
    </form>
    
   </div>
  );
};

export default AddTenant;
