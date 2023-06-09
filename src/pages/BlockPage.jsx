import React from "react";
import BlockRows from "../components/BlockRows";
import { blocks } from "../assets/data";
import { useLocation } from "react-router-dom";
import RoomBlock from "../components/RoomBlock";
import StatsBlock from "../components/StatsBlock";
import ".././App.css";

function BlockPage() {
  const location = useLocation();

  const id = location.pathname.split("/")[2];
  return (
    <div>
      {/* div for smaller screens 280 to 767  */}
      <div className="pl-6 h-full md:hidden w-screen p-5  bg-slate-800">
        <BlockRows />

        <div className="flex   flex-col ">
          <div className="  w-full flex flex-col items-center  overflow-y-scroll hideScroll  rounded-lg  ">
            <p className="font-bold text-3xl text-slate-400">Block No {id}</p>
            <span className="text-xl text-slate-500">Rooms list</span>
            <div className="w-full flex flex-col items-center overflow-y-scroll pl-14">
              {blocks[id - 1].Rooms?.map((item) => (
                <RoomBlock roomDetails={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* screens for large devices from 768 */}
     
      <div className="bg-slate-500 ml:flex xs:hidden h-screen    hideScroll flex-col pl-5 ">
        <BlockRows />
        {/* <div className="text-3xl  bg-slate-500  ml-5 basis-1/12  ">Tenants List</div> */}

        <div className="flex basis-10/12   ">
          <div  style={{height:'80vh'}} className=" flex flex-col basis-8/12    ">
            <p className="font-bold text-3xl ">Block No {id}</p>
            <span className="text-xl ">Rooms list</span>

            
              <div  className=" al:w-9/12 md:w-full flex flex-col items-center overflow-y-scroll  bg-slate-600 hideScroll mb-4  rounded-lg  ">
                {blocks[id - 1].Rooms.map((item) => (
                  <RoomBlock roomDetails={item} />
                ))}
              </div>
            
          </div>
          <div className="basis-3/12 mt-12 al:hidden md:block">
            <StatsBlock value={"Total rooms"} num={10} />
            <StatsBlock value={"Total tenants"} num={5} />
            <StatsBlock value={"Available rooms"} num={5} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockPage;
