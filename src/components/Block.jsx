import React from 'react'
import {  useLocation, useNavigate } from 'react-router-dom'
import Blocks from '../pages/BlockPage'

function Block({item}) {
   const navigate= useNavigate();
   const location = useLocation();
   const id = location.pathname.split('/')[2];
  
    return (
    <button onClick={()=>navigate(`/blocks/${item.No}`) } className={item.No == id?'bg-green-600  w-48 h-16 m-3 al:p-2 md:p-8 flex items-center md:h-20  text-center rounded ':'bg-slate-200  w-48 h-16 m-3 al:p-2 md:p-8 flex items-center md:h-20  text-center rounded '}>
     <b>Block No {item.No}</b>
    </button>
  )
}

export default Block