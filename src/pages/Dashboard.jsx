import React, { useState } from "react";
import BlockRows from "../components/BlockRows";
import Navbar from "../components/Navbar";
import StatsBlock from "../components/StatsBlock";
import TenantBlock from "../components/TenantBlock";
import './../App.css';
import { Snackbar } from "@mui/material";

function Dashboard({setOpenSnac,openSnac}) {

  return (
   <div>
   <Snackbar
   anchorOrigin={{vertical:'top',horizontal:'center'}}
    open={openSnac}
    onClose={()=>setOpenSnac(false)}
    autoHideDuration={4000}
    message={"logged in"}
    
    
   />
   {/* dashboard for smaller devices from 280 - 767 */}
     <div className="bg-slate-500 flex h-fit ml:hidden   sx:ml-0 w-screen   p-3 flex-col hideScroll">
     <BlockRows/>
      <div className="basis-11/12 flex">
        <div className="basis-3/4  w-screen al:flex-1  h-3/6 overflow-y-scroll">
         <div className="">
      <div className="text-2xl  bg-slate-500   ml-5    ">Tenants List</div>
        <div className="overflow-y-scroll h-screen">
        <TenantBlock name={'Durk Don Toliver'} BlockNo={3} RoomNo={3}  />
          <TenantBlock name={'Yatchy Travis'} BlockNo={3} RoomNo={3}  />
          <TenantBlock name={'Guissepe Monroe'} BlockNo={3} RoomNo={3}  />
          <TenantBlock name={'Denis pascal mgaya'} BlockNo={3} RoomNo={3}  />
          <TenantBlock name={'Rossevault Campbell'} BlockNo={3} RoomNo={3}  />
          <TenantBlock name={'Alton Ashville'} BlockNo={3} RoomNo={3}  />
          <TenantBlock name={'Bonttego Gustavo'} BlockNo={3} RoomNo={3}  />
          <TenantBlock name={'Hilton Davies'} BlockNo={3} RoomNo={3}  />
          <TenantBlock name={'Shaundria Saint'} BlockNo={3} RoomNo={3}  />
          <TenantBlock name={'Bradley Houston'} BlockNo={3} RoomNo={3}  />
          <TenantBlock name={'Virginia Majors'} BlockNo={3} RoomNo={3}  />
          <TenantBlock name={'Rico Camavinga Benzema'} BlockNo={3} RoomNo={3}  />
          <TenantBlock name={'Rico Camavinga Benzema'} BlockNo={3} RoomNo={3}  />
          <TenantBlock name={'Rico Camavinga Benzema'} BlockNo={3} RoomNo={3}  />
          <TenantBlock name={'Rico Camavinga Benzema'} BlockNo={3} RoomNo={3}  />
        </div>
         </div>
        </div>
       
      </div>
    </div>
      {/* dashboard for devices 768 and above */}
    <div className="bg-slate-500 ml:flex xs:hidden h-screen  hideScroll flex-col ">
      <BlockRows />
      <div className="text-3xl  bg-slate-500  ml-5 basis-1/12  ">Tenants List</div>
     
        <div className=" flex basis-8/12 h-96  ">
         <div className="  overflow-y-scroll   basis-8/12 hideScroll">
         <TenantBlock name={'Durk Don Toliver'} BlockNo={3} RoomNo={3}  />
          <TenantBlock name={'Yatchy Travis'} BlockNo={3} RoomNo={3}  />
          <TenantBlock name={'Alton Ashville'} BlockNo={3} RoomNo={3}  />
        
         
          <TenantBlock name={'Rico Camavinga Benzema'} BlockNo={3} RoomNo={3}  />
          <TenantBlock name={'Rico Camavinga Benzema'} BlockNo={3} RoomNo={3}  />
          
         </div>
        
        <div className="basis-3/12   ">
          <StatsBlock value={'Total Tenants'} num={8} />
          <StatsBlock value={'Total rooms'} num={10000} />
          <StatsBlock value={'Available rooms'} num={2} />
        </div>
        
      </div>
    </div>
   </div>
  );
}

export default Dashboard;
