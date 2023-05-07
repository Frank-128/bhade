import {Settings} from "@mui/icons-material";   
import React from 'react';
import {useNavigate} from 'react-router-dom';

export const Setting=()=>{
    const navigate = useNavigate();
    return(

        <div className={' bg-slate-500 h-screen'}>
            <div className="text-white pl-4 pt-4  items-center al:text-xl ml:text-3xl flex gap-2">
                <Settings style={{fontSize:"30px"}}  className="mt-1"/>
              <span className="font-bold">Settings</span> 

            </div>
            <div>
                <div className=" bg-slate-300 p-4 m-4 border-2 rounded-xl cursor-pointer" onClick={()=>navigate('/changeemail')}> <p className="font-bold al:text-lg ml:text-2xl">Change Email</p></div>
                <div className=" bg-slate-300 p-4 m-4 border-2 rounded-xl cursor-pointer " onClick={()=>navigate('/changepassword')}>  <p className="font-bold al:text-lg ml:text-2xl">Change Password</p></div>
                <div className=" bg-slate-300 p-4 m-4 border-2 rounded-xl cursor-pointer"  onClick={()=>navigate('/accounts')}> <p className="font-bold al:text-lg ml:text-2xl">Accounts</p></div>
                
            </div>
           
        </div>
    )
}
  