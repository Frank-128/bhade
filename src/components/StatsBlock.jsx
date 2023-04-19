import React from 'react'

function StatsBlock({value,num}) {
  return (
    <div className='bg-slate-200 m-4 h-32 rounded-lg shadow-xl p-3'>
        <p className='text-3xl'>  {value} : <b>{num}</b></p>
    </div>
  )
}

export default StatsBlock