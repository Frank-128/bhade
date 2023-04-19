import React from "react";
import BlockRows from "../components/BlockRows";
import Navbar from "../components/Navbar";
import StatsBlock from "../components/StatsBlock";
import TenantBlock from "../components/TenantBlock";
import './../App.css';

function Dashboard() {

  return (
   <div>
   {/* dashboard for smaller devices from 280 - 767 */}
     <div className="bg-slate-500 flex h-fit md:hidden al:ml-1 sx:ml-0 w-full   p-5 flex-col hideScroll">
     <BlockRows/>
      <div className="basis-11/12 flex">
        <div className="basis-3/4 ml-6 w-screen al:flex-1  h-3/6 overflow-y-scroll">
         <div className="">
      <div className="text-2xl  bg-slate-500   ml-5    ">Tenants List</div>
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
      {/* dashboard for devices 768 and above */}
    <div className="bg-slate-500 md:flex xs:hidden h-full p-5  flex-col ">
      <BlockRows/>
      <div className="flex ">
        <div className="basis-9/12 ml-6 w-screen al:flex-1 flex-start">
      <div className="text-3xl  bg-slate-500   ml-5   ">Tenants List</div>
         <div className="h-[46rem]   overflow-y-scroll hideScroll">
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
