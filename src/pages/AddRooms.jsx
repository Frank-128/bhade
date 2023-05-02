import React from 'react'

function AddRooms(i) {
   
  return (
    <div className='rounded p-5 flex items-center justify-center h-fit w-full   '>
       <div className='w-1/3 bg-slate-400 p-4 rounded'>
       <form className='flex h-full  flex-col justify-between' action="">
        <div className='flex flex-col '>
            <label htmlFor="">Room No {i.i+1}</label>
            <input className='p-2' type="number" value={i.i+1} />
        </div>
        <div className='flex flex-col '>
            <label htmlFor="">Tenant Name</label>
            <input className='p-2' type="text"  />
        </div>
        <div className='flex flex-col '>
            <label htmlFor="">Metre No.</label>
            <input className='p-2' type="text"  />
        </div>
        <div className='flex flex-col '>
            <label htmlFor="">Current Metre Reading</label>
           <select>
            <option>Single Room Public</option>
            <option>Double Room Public</option>
            <option> Single Master Bedroom</option>
            <option>Double Master Bedroom</option>
           
           </select>
        </div>
        <div className='flex flex-col '>
            <label htmlFor="">Type</label>
            <input className='p-2' type="text"  />
        </div>
        <div className='flex flex-col '>
            <label htmlFor="">Price</label>
            <input className='p-2' type="text"  />
        </div>
       </form>
       </div>
    </div>
  )
}

export default AddRooms