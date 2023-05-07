import { Person, Add, Apple } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import "../App.css";
export const Account = () => {
  return (
    <div className=" bg-slate-500 h-screen  p-6  w-screen ml:w-full ">
     <Link to='/settings'>
         <div className="flex items-center ">
            <ArrowBack/> back
         </div>
         </Link>
     <div  className="flex pt-4 items-center justify-between ">
     <p className="text-3xl text-black font-bold underline">Accounts</p>

<div className="flex justify-center p-3 ">
  {" "}
  <div className={"border-2 flex p-2 ml:w-full w-24 items-center rounded-xl bg-slate-300 gap-3"}>
    <Add
      style={{ fontSize: "20px" }}
      className="text-slate-900  rounded-3xl border-4 border-slate-900"
    />{" "}
    <p className=" text-xs sx:text-md ml:text-2xl  font-bold flex justify-center items-center ">
      Add Account
    </p>
  </div>
</div>
     </div>

     <div className='h-3/4 overflow-y-scroll hideScroll'>
     {
        Array(6).fill().map((_,i)=>(
            <div className="flex  gap-2 bg-slate-300  rounded-2xl p-4 mt-4 flex-col sx:flex-row justify-between items-center">
        <div className="flex  flex-col ml:flex-row ">
          <div className="ml:hidden">
            <Person
              style={{ fontSize: "40px" }}
              className="text-slate-700   "
            />
          </div>
          <div className="al:hidden ml:block">
            <Person
              style={{ fontSize: "80px" }}
              className="text-slate-700 al:hidden ml:block "
            />
          </div>
          <span className="ml:text-2xl al:text-md  font-bold flex items-center ">
            Dnspascal094@gmail.com
          </span>
        </div>
        <button className=" rounded-2xl border-slate-800 ml:w-28 p-2 al:w-18  font-bold bg-orange-600 ">
          Remove
        </button>
      </div>
        ))
     }
     </div>
    </div>
  );
};
