import { ArrowDownward } from "@mui/icons-material";
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { metreData } from "../assets/data";

function Metre() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterName, setFilterName] = useState("");
  const [filterTime, setFilterTime] = useState(false);
  const [filterMonth, setFilterMonth] = useState("");
  

  const handleFilter = (value)=>{
  
    if(filterMonth !== "" || filterName!==''){

        var res = ((value.date.getFullYear())+"-0"+(value.date.getMonth()+1)) === filterMonth
        var nameRes = value.name.toLowerCase().includes(filterName.toLowerCase())
       
        if(filterMonth !== "" && filterName!==''){
            return res && nameRes
        }
        else if(filterMonth !== "" && filterName ===''){
            return res
        }
        
        
         return nameRes

    } else if(filterName === ''){
        return filterName === ''
    }
   
    
    
  }
  const handleSort = (a,b)=>{
    const timeA = a.date
    const timeB = b.date
    
   if(filterTime){
    return timeA - timeB
   }
   else if(!filterTime)
   return timeB - timeA
  }
  const setDefaultValue = ()=>{
    setFilterMonth("")
    setFilterName("")
    setFilterTime(false)
  }

  useEffect(()=>{
    window.addEventListener("click",(e)=>{
       
        if(!e.target.classList.contains("filterDiv")){
            setFilterOpen(false)
           
        }
    })
  },[])
  return (
    <div className="bg-slate-700 w-screen md:w-full flex flex-col h-screen text-gray-400">
      <div>
        <button className="bg-slate-500 float-right m-10 p-5 rounded">
          Add new user
        </button>
      </div>
      <div>
        <div className="flex relative justify-between px-10">
          <span>All metre readings</span>
          <div className="filterDiv">
            <button className="filterDiv" onClick={() => setFilterOpen(!filterOpen)}>
              filter <ArrowDownward className="filterDiv"/>
            </button>
          </div>
          {filterOpen && (
            <div className="absolute md:right-10 right-5 top-10 filterDiv bg-slate-500 p-3 md:p-5 w-3/4 md:w-fit float-right">
              <ul className="flex filterDiv  flex-col gap-3">
                <li className="cursor-pointer filterDiv hover:opacity-50"><label htmlFor="name" className="filterDiv"><span>Name</span></label> <input id="name" className="p-1  w-3/4 filterDiv bg-slate-400 text-slate-200" type="text" value={filterName} onChange={(e)=>setFilterName(e.target.value)} /></li>
                <li className="cursor-pointer filterDiv hover:opacity-50"><label htmlFor="time" className="filterDiv"><span>Month</span></label> <input id="time" className="bg-slate-400 w-2/3  md:w-3/4 filterDiv text-slate-200" type="month" value={filterMonth} onChange={(e)=>setFilterMonth(e.target.value)} /></li>
                <li className="cursor-pointer filterDiv hover:opacity-50" onClick={()=>setFilterTime(!filterTime)}>Time {filterTime?"(Descending)":"(Ascending)"}</li>
                <li className="cursor-pointer filterDiv hover:opacity-50" onClick={setDefaultValue}>Default</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="m-4 overflow-y-scroll">
        <Table>
          <TableHead>
            <TableRow className="bg-slate-300 border-b-2 border-slate-500">
              <TableCell>S/N</TableCell>
              <TableCell>Room No</TableCell>
              <TableCell>Tenant Name</TableCell>
              <TableCell>Metre Reading</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {metreData
              .filter(
                (item) =>  handleFilter(item)
              ).sort(handleSort)
              .map((item, index) => (
                <TableRow
                  className={index % 2 === 0 ? "bg-slate-200" : "bg-slate-100"}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.roomNo}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.metreReading}</TableCell>
                  <TableCell>{item.date.toDateString()}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Metre;
