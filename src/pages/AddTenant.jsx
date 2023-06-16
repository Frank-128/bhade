import axios from "axios";
import React, { useState } from "react";

const AddTenant = () => {

const [firstname,setFirstname] = useState("");
const [lastname,setLastname] = useState("");
const [phoneNo,setPhoneNo] = useState("");
const [metre,setMetre] = useState("");
const [roomNo,setRoomNo] = useState("");
const [amountPaid,setAmountPaid] = useState("");
const [startDate,setStartDate] = useState("");
const [endDate,setEndDate] = useState("");

const [contract,setContract] = useState(null);

 const addTenant= (e)=>{
  e.preventDefault();

  axios.post("addTenant", {firstname,lastname,phoneNo,metre, roomNo,amountPaid, startDate, endDate, contract}).then(res=>{

  });

 }
console.log({firstname,lastname,phoneNo,metre, roomNo,amountPaid, startDate, endDate, contract})
  return (
    
   <div className="flex  bg-slate-600  justify-center ml:h-screen al:h-full ">
     <form onSubmit={addTenant} className=" flex  ml:w-2/3 al:w-screen  h-fit ml:my-3 pb-2 ml:rounded-2xl bg-slate-400  flex-col items-center justify-center ">
        <i><p className="pt-8 font-bold">Fill the form to Add a Tenant</p></i>
      <div className="mt-6">
        <label className="block mb-2 font-bold text-sm  " htmlFor="firstname">FirstName:</label>
        <input
          className=" border-2 p-1 border-blue-400 rounded-xl w-64"
          type="text"
          name="firstname"
          onChange={(e)=>setFirstname(e.target.value)}
          value={firstname}
          id="firstname"
          placeholder="firstname"
        />
      </div>
      <div className="mt-6">
        <label className="block mb-2 font-bold text-sm  "  htmlFor="lastname">LastName:</label>
        <input
          className=" border-2 p-1 border-blue-400 rounded-xl w-64"
          type="text"
          name="lastname"
          onChange={(e)=>setLastname(e.target.value)}
          value={lastname}
          id="lastname"
          placeholder="lastname"
        />
      </div>
      <div className="mt-6">
        <label className="block mb-2 font-bold text-sm  " htmlFor="phoneNo">Phone Number:</label>
        <input
          className=" border-2 p-1 border-blue-400 rounded-xl w-64"
          type="text"
          name="phoneNo"
          onChange={(e)=>setPhoneNo(e.target.value)}
          value={phoneNo}
          id="phoneNo"
          placeholder="Phone No."
        />
      </div><br/>
      <div className="mb-6">
        <label className="block mb-2 font-bold text-sm  " htmlFor="amountPaid">Amount Paid:</label>
        <input
          className=" border-2 p-1 border-blue-400 rounded-xl w-64"
          type="text"
          name="amountPaid"
          onChange={(e)=>setAmountPaid(e.target.value)}
          value={amountPaid}
          id="amountPaid"
          placeholder="amountPaid"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-bold text-sm  " htmlFor="contract">Contract:</label>
        <input
          type="file"
          onChange={(e)=>setContract(e.target.files[0])}
          name="contract"
          id="contract"
          className=" border-2 p-1 border-blue-400 rounded-xl w-64"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-bold text-sm  " htmlFor="startDate">Contract StartDate:</label>
        <input
          type="date"
          name="startDate"
          onChange={(e)=>setStartDate(e.target.value)}
          id="startDate"
          value={startDate}
          className=" border-2 p-1 border-blue-400 rounded-xl w-64"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-bold text-sm  " htmlFor="endDate">Contract EndDate:</label>
        <input
          type="date"
          name="endDate"
          onChange={(e)=>setEndDate(e.target.value)}
          value={endDate}
          id="endDate"
          className=" border-2 p-1 border-blue-400 rounded-xl w-64"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm  font-bold ">Room</label>
        <select onChange={(e)=>setRoomNo(e.target.value)} value={roomNo} className=" border-2  p-1 border-blue-400 rounded-xl w-64">
          <option value={1}>Block1-Room2</option>
          <option value={2}>Block2-Room4</option>
          <option value={3}>Block6-Room3</option>
          <option value={4}>Block4-Room4</option>
          <option value={5}>Block1-Room5</option>
        </select>
      </div>
      <div className="">
        <label className="block mb-2 text-sm  font-bold">Current Metre Reading:</label>
        <input
         className=" border-2 p-1 border-blue-400 rounded-xl w-64"
          type="number"
          id="metre"
          value={metre}
          onChange={(e)=>setMetre(e.target.value)}
          placeholder="metre reading"
          name="metre"
        />
      </div><br/>
      <button type="submit" className="border-2 p-1 border-blue-400 bg-slate-600 text-white rounded-xl w-32 ">
        Add Tenant
      </button>
    </form>
    
   </div>
  );
};

export default AddTenant;
