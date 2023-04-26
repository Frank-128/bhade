import {Person, Add} from '@mui/icons-material'
export const Account = () =>{
    return(
        <div className="pl-16 bg-slate-500 h-full">
            <p  className="text-3xl text-black pt-8 font-bold underline">Accounts</p>

           <div className="flex justify-end p-3 "> <div className={'border-2 flex p-4 rounded-xl bg-slate-300 gap-3'} ><Add style={{fontSize:"40px"}} className="text-slate-900  rounded-3xl border-4 border-slate-900"/> <p className=" text-2xl font-bold flex justify-center items-center ">Add Account</p></div></div>
           
           <div className='flex justify-between h-28 bg-slate-300 border-r rounded-2xl p-4 mt-4'>
            <div className="flex">
            <Person  style={{fontSize:"80px"}} className="text-slate-700"/>    
                <span className='text-2xl font-bold flex items-center ml-4'>Dnspascal094@gmail.com</span>
           </div>
               <div className="pt-4"> <button className=" rounded-2xl border-slate-800 w-28 h-12 font-bold bg-red-600 ">Remove</button></div>
               
            </div>
            <div className='flex justify-between h-28 bg-slate-300 border-r rounded-2xl p-4 mt-4'>
            <div className="flex">
            <Person  style={{fontSize:"80px"}} className="text-slate-700"/>    
                <span className='text-2xl font-bold flex items-center ml-4'>FrayVannyBitchAss.com</span>
           </div>
               <div className="pt-4"> <button className=" rounded-2xl border-slate-800 w-28 h-12 font-bold bg-red-600 ">Remove</button></div>
               
            </div>
        </div>
    )
} 