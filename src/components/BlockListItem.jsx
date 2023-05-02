import React from 'react'
import { useNavigate } from 'react-router-dom'


function BlockListItem({num,miniActive,handleMiniActive}) {
  const navigate = useNavigate();
  
  return (
    <div onClick={()=>{navigate('/blocks/'+num);handleMiniActive(num.toString())}}  className={miniActive === num.toString()? 'bg-slate-700 m-2 p-1 cursor-pointer':'bg-slate-300 m-2 p-1 cursor-pointer'}>
      block {num}
    </div>
  )
}

export default BlockListItem