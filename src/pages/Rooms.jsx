import { ArrowBack } from '@mui/icons-material';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import axios from 'axios';

function Rooms() {
  
  const {state} = useLocation();
  const navigate = useNavigate();
  const [rooms,setRooms] = useState([{roomNo:'',metre:'',lukuNo:'',roomType:''}]);

 const handleChangeInput = (index,event)=>{
  const {name,value} = event.target;
  const updatedObjects = [...rooms];
  updatedObjects[index] = {...updatedObjects[index],[name]:value};
  setRooms(updatedObjects);
  
 }
 const handleSubmit = (e) =>{
  e.preventDefault()

  rooms.forEach(async(room)=>{
    await axios.post("addRoom",room).then(res=>{
      console.log(res.data.message);
   })
  })
 }
 
  return (
    <form onSubmit={handleSubmit} className='h-screen bg-slate-700  overflow-y-scroll '>
    <div className='text-white'><button onClick={()=>navigate('/addBlock')}><ArrowBack/>Back </button></div>
      
      <p className='text-center font-bold text-3xl text-white'>Fill in the rooms Form</p>
       
       { Array(Number(state.roomNo)).fill().map((_,i)=>( <div className='rounded p-5 flex items-center justify-center h-fit w-screen sx:w-full'>
       <div className='ml:w-1/3 w-full bg-slate-400 p-4 rounded '>
       <div  className='flex h-full  flex-col justify-between' action="">
        <div className='flex flex-col '>
            <label htmlFor="">Room No {i+1}</label>
            <input className='p-2' name="roomNo" type="number"  onChange={(e)=>handleChangeInput(i,e)}  />
        </div>
        <div className='flex flex-col '>
            <label htmlFor="">Metre No.</label>
            <input className='p-2' name='metre' type="text" onChange={(e)=>handleChangeInput(i,e)}  />
        </div>
        <div className='flex flex-col '>
            <label htmlFor="">Luku No.</label>
            <input className='p-2' name='lukuNo' type="text" onChange={(e)=>handleChangeInput(i,e)} />
        </div>
        <div className='flex flex-col '>
            <label htmlFor="">Type</label>
           <select name='roomType' onChange={(e)=>handleChangeInput(i,e)} >
            <option>Single Room </option>
            <option>Double Room </option>
            <option> Single Master Bedroom</option>
            <option>Double Master Bedroom</option>
           
           </select>
        </div>
        <div className='flex flex-col '>
            <label htmlFor="">Amount</label>
            <input className='p-2' type="text" name='amount'  onChange={(e)=>handleChangeInput(i,e)} />
        </div>
       
       </div>
       </div>
    </div>))}
      
  <div className='flex items-center w-full justify-center my-2'>
  <button type='submit' className='bg-slate-400 p-3 rounded w-1/4'>Save</button>
  </div>
    </form>
  )
}

export default Rooms