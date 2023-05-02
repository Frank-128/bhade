import React, { useState } from 'react'

function ConfirmDialog({item,setShow}) {
    const [messageItem,setMessageItem]= useState(item);
    const handleClose = (e)=>{
      if(e.target.classList.contains('modal')){
        setShow(false);
      }
    }
  return (
    <div onClick={handleClose} className='fixed top-0 left-0 flex items-center justify-center modal bg-black/20 w-full h-full'>
        <div  className="w-1/3 h-1/4 items-center modal_content flex flex-col justify-evenly rounded-lg p-4  bg-slate-400">
            <p>Are you sure you want to perform this action</p>
            <p>{messageItem.status}</p>
            <div className='flex w-1/2  gap-32  justify-evenly'>
                <button onClick={()=>setShow(false)}  className='p-3 bg-red-500 w-2/4 rounded'>Cancel</button>
                <button onClick={()=>{setMessageItem((prevMessageItem)=>({...prevMessageItem,status:'complete'}));setShow(false)}} className='p-3 w-2/4 bg-green-500 rounded'>Yes</button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmDialog