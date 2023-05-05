import { ArrowBack } from '@mui/icons-material';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AddRooms from './AddRooms'
function Rooms() {
  const {state} = useLocation();
  const navigate = useNavigate();

 
  return (
    <div className='h-screen bg-slate-700  overflow-y-scroll '>
    <div className='text-white'><button onClick={()=>navigate('/addBlock')}><ArrowBack/>Back </button></div>
      
      <p className='text-center font-bold text-3xl text-white'>Fill in the rooms Form</p>
       { Array(Number(state.roomNo)).fill().map((_,i)=>(<AddRooms i={i}/>))}
     
    </div>
  )
}

export default Rooms