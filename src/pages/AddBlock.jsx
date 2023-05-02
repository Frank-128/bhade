import { Input } from '@mui/material'
import React,{useState} from 'react'
import { Navigate } from 'react-router-dom';
import AddRooms from './AddRooms';

function AddBlock() {
    const [inputsValue,setInputsValue] = useState({blockNo:'',roomNo:''});
    const [show,setShow] = useState(false);
    const handleChange = (e)=>{
        setInputsValue((prev)=>({...prev,[e.target.name]:e.target.value}));
        
    }
    const handleSubmit = (e)=> {
       e.preventDefault();
       setShow(true);
    }
    console.log(inputsValue);
  return (
    <div className='pl-16 flex flex-col bg-slate-700 items-center justify-center h-full'>
        <div className='w-1/3 h-3/12 bg-slate-300 p-5 rounded-xl flex flex-col justify-evenly'>
        <span  className='font-bold text-2xl text-center'>Add a new Block</span>
       
        <form onSubmit={handleSubmit}>
            <div  className=' flex flex-col m-3'>
                <label htmlFor="blockNo">Block No</label>
                <Input id='blockNo' className='outline p-2' name='blockNo'  onChange={handleChange} required type='number' />
            </div>
            <div  className=' flex flex-col m-3'>
                <label htmlFor="roomNo">Number of rooms</label>
                <Input id='RoomNo' className='outline p-2' name='roomNo' onChange={handleChange} required type='number' />
            </div>
            <div className='flex justify-between pb-3'>
            <button type='reset' onClick={()=>{setInputsValue({blockNo:'',roomNo:''});setShow(false)}} className='bg-slate-200 p-4 rounded-lg'>Reset</button>
            <button  className='bg-blue-600 p-4 rounded-lg'>Next</button>
            </div>
        </form>
        </div>
        
       {
       show &&
       <Navigate to='/rooms' state={inputsValue} />
       }
       
    </div>
  )
}

export default AddBlock