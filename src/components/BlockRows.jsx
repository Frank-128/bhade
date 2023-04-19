import React from 'react'
import Block from './Block'
import {blocks} from '../assets/data'
function BlockRows() {
  return (
    <div className=" flex basis-1/12   overflow-x-scroll justify-between hideScroll pl-6">
        
       
        {
        blocks.map((item)=>
          <Block item={item} />
        
        )
      }
        
      </div>
  )
}

export default BlockRows