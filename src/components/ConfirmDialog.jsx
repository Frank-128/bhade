import axios from 'axios';
import React, { useState } from 'react'

function ConfirmDialog({item,setShow,fetchData}) {
    const [messageItem,setMessageItem]= useState(item);
    const handleClose = (e)=>{
      if(e.target.classList.contains('modal')){
        setShow(false);
      }
    }
    const updateTask = async()=>{
      const res = await axios.put('/updateTask/'+item.id,{name:item.name,status:true});
      console.log(res.data);
      setShow(false);
      fetchData()
    }

  return (
    <div onClick={handleClose} className='fixed top-0 left-0 flex items-center justify-center modal bg-black/20 w-screen h-full'>
        <div  className=" h-1/4 w-3/4 ml:w-1/3 ml:h-1/4 items-center modal_content flex flex-col justify-evenly rounded-lg p-4  bg-slate-400">
            <p>Are you sure you want to perform this action</p>
            
            <div className='flex w-full gap-4  justify-'>
                <button onClick={()=>setShow(false)}  className='p-3 bg-red-500 w-2/4 rounded'>Cancel</button>
                <button onClick={updateTask} className='p-3 w-2/4 bg-green-500 rounded'>Yes</button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmDialog