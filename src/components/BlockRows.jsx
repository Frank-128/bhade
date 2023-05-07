import React from 'react'
import Block from './Block'
import {blocks} from '../assets/data'
function BlockRows() {
  return (
    <div className=" flex  overflow-x-scroll basis-2/12 overflow-y-auto h-32 justify-between hideScroll ">
        
       
        {
        blocks.map((item)=>
          <Block item={item}  />
        
        )
      }
        
      </div>
  )
}

export default BlockRows