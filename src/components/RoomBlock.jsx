import React from 'react'
import { Link } from 'react-router-dom'

function RoomBlock({roomDetails}) {
  return (
   <div>
   {/* Roomblock for smaller devices from 280-767 */}
     <div className='bg-slate-300 my-2 rounded-xl flex md:hidden items-center w-10/12 p-3  md:w-fit '>
        <div>
        <p className='font-bold text-3xl text-left   mb-3'> Room no {roomDetails.No}</p>
        <div className='w-10/12 flex justify-between  '>
        <span className='font-bold'>Tenant Name :</span> <Link to='/'><span className='text-orange-600'>{roomDetails.Name}</span></Link>
        </div>
        <div className=' w-10/12 flex justify-between '>
        <span className='font-bold'>Metre No :</span> <span> {roomDetails.Metre}</span>
        </div>
        <div className=' w-10/12 flex justify-between '>
        <span className='font-bold'>Current Metre Reading :</span> <span>{roomDetails.MetreReading}</span>
        </div>
        <div className=' w-10/12 flex justify-between '>
        <span className='font-bold'>Type:</span> <span>{roomDetails.Type}</span>
        </div>
        <div className=' w-10/12 flex justify-between '>
        <span className='font-bold'>Price:</span> <span>{roomDetails.Price}</span>
        </div>
       
         <div className='w-96 flex justify-center my-2'>
         <button className='bg-orange-400 rounded-xl p-3 '>Update Details</button>
         </div>
        </div>
       
    </div>
    {/* Room block for large devices from 768 */}
    <div className='bg-slate-300 m-3  rounded-xl flex justify-center al:hidden md:block items-center w-fit p-3  md:w-fit '>
        <div>
        <p className='font-bold text-3xl text-center  mb-3'> Room no {roomDetails.No}</p>
        <div className='flex  justify-between '>
        <span className='font-bold'>Tenant Name :</span> <Link to='/'><span className='text-orange-600'>{roomDetails.Name}</span></Link>
        </div>
        <div className='flex  justify-between '>
        <span className='font-bold'>Metre No :</span> <span> {roomDetails.Metre}</span>
        </div>
        <div className='flex  justify-between '>
        <span className='font-bold'>Current Metre Reading :</span> <span>{roomDetails.MetreReading}</span>
        </div>
        <div className='flex  justify-between '>
        <span className='font-bold'>Type:</span> <span>{roomDetails.Type}</span>
        </div>
        <div className='flex  justify-between '>
        <span className='font-bold'>Price:</span> <span>{roomDetails.Price}</span>
        </div>
       
         <div className='w-96 flex justify-center my-2'>
         <button className='bg-orange-400 rounded-xl p-3 '>Update Details</button>
         </div>
        </div>
       
    </div>
   </div>
  )
}

export default RoomBlock