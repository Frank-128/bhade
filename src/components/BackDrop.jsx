import React from 'react'
import Delete from './Delete'


const BackDrop = (props) => {
    return (
        <div  className="bg-black/80   h-full w-full fixed flex items-center justify-center top-0 left-0 z-30" onClick={props.onCancel} >
         <Delete onCancel={props.onCancel}/>
        </div>
    )
}

export default BackDrop