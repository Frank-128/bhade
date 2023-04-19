import React from 'react'
import {  useNavigate } from 'react-router-dom'
import Blocks from '../pages/BlockPage'

function Block({item}) {
   const navigate= useNavigate();
   
    return (
    <button onClick={()=>navigate(`/blocks/${item.No}`) } className='bg-slate-200 focus:bg-green-300 w-48 h-14 m-3 al:p-2 md:p-8 flex items-center md:h-20  text-center rounded '>
     <b>Block No {item.No}</b>
    </button>
  )
}

export default Block