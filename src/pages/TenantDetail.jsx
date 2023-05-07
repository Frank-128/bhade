import { Table, TableRow, TableCell } from "@mui/material";
import React from "react";
import "../App.css";
import { Chart } from "react-google-charts";
import { chartData } from "../assets/data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
function TenantDetail() {
  const data = {
    chart: { title: "METRE READING AGAINST MONTHS" },
  };
  const chatData = [
    [
      "months",
      "jan",
      "feb",
      "march",
      "april",
      "may",
      "june",
      "july",
      "aug",
      "sept",
      "oct",
      "nov",
      "dec",
    ],

    [10, 12, 9, 5, 23.567, 2.4, 34, 13.41, 17, 16, 7.8, 2],
  ];
  const myData = [
    { month: "Jan", value: 23 },
    { month: "Feb", value: 21 },
    { month: "Mar", value: 12 },
    { month: "Apr", value: 32 },
    { month: "Mar", value: 2 },
    { month: "Jun", value: 3 },
    { month: "Jul", value: 13 },
    { month: "Aug", value: 33 },
    { month: "Sept", value: 23 },
    { month: "Oct", value: 23 },
    { month: "Nov", value: 23 },
    { month: "Dec", value: 23 },
  ];
  return (
    <div className="h-screen w-screen ml:w-full  p-4 flex flex-col overflow-y-scroll  bg-gray-700">
      <span className=" mb-3 text-3xl text-slate-100">Tenant Details</span>
      <div className="flex justify-around">
        <div className="flex flex-col xl:w-2/5 w-screen  justify-around bg-slate-400 rounded">
          <div className="flex  justify-between ml:px-36 p-6  pt-20 xl:px-16 ml:text-xl text-xl">
            <i className="font-bold ">Name : </i>
            <span>Filbert Henry</span>
          </div>

          <div className="flex justify-between ml:px-36 p-6  py-3  xl:px-16 text-xl">
            <i className="font-bold ">Contact : </i>
            <span>0745454545</span>
          </div>
          <div className="flex justify-between ml:px-36 p-6 py-3  ml:text-xl xl:px-16 text-xl">
            <i className="font-bold ">Contract startdate : </i>
            <span>12/3/2022</span>
          </div>
          <div className="flex justify-between ml:px-36 p-6 py-3  xl:px-16 text-xl">
            <i className="font-bold ">Contract endDate : </i>
            <span>12/3/2024</span>
          </div>
          <div className="flex justify-between ml:px-36 p-6 py-3  xl:px-16 text-xl">
            <i className="font-bold ">Metre Number : </i>
            <span>1122334455</span>
          </div>
          <div className="flex justify-between ml:px-36 p-6 py-3  xl:px-16 text-xl">
            <i className="font-bold ">Current Metre Reading : </i>
            <span>34</span>
          </div>
          <div className="flex justify-between ml:px-36 p-6 py-3  xl:px-16 text-xl">
            <i className="font-bold ">Luku No : </i>
            <span>2233114455</span>
          </div>
          <div className="flex justify-between ml:px-36 p-6 py-3  xl:px-16 text-xl">
            <i className="font-bold ">Total Amount : </i>
            <span>2400000</span>
          </div>
          <div className="flex justify-between ml:px-36 p-6 py-3  xl:px-16 text-xl">
            <i className="font-bold ">Amount paid : </i>
            <span>2000000</span>
          </div>
          <div className="flex justify-between ml:px-36 p-6 py-3 pb-24 xl:px-16 text-xl">
            <i className="font-bold ">Remaining amount : </i>
            <span>400000</span>
          </div>
        </div>

        <div className=" bg-slate-400 hidden rounded-xl p-5 xl:flex flex-col items-center xl:px-16 text-xl">
          <i className="font-bold ">Contract : </i>
          <span>
            <embed
              src="./LogBook.pdf"
              width="500"
              height="800"
              type="application/pdf"
            />
          </span>
        </div>
      </div>

      <div className="mt-14 ">
        <span className="font-bold text-slate-100 ">Monthly metre reading</span>
        <div className="overflow-x-scroll w-[15.6rem]  sx:w-5/6 bg-slate-100 hideScroll ml:w-3/4 ">
          <Table style={{ widh: "70%" }}>
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell>Jan</TableCell>
              <TableCell>Feb</TableCell>
              <TableCell>Mar</TableCell>
              <TableCell>Apr</TableCell>
              <TableCell>May</TableCell>
              <TableCell>Jun</TableCell>
              <TableCell>Jul</TableCell>
              <TableCell>Aug</TableCell>
              <TableCell>Sep</TableCell>
              <TableCell>Oct</TableCell>
              <TableCell>Nov</TableCell>
              <TableCell>Dec</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Reading</TableCell>
              <TableCell>13</TableCell>
              <TableCell>13</TableCell>
              <TableCell>13</TableCell>
              <TableCell>13</TableCell>
              <TableCell>13</TableCell>
              <TableCell>13</TableCell>
              <TableCell>13</TableCell>
              <TableCell>13</TableCell>
              <TableCell>13</TableCell>
              <TableCell>13</TableCell>
              <TableCell>13</TableCell>
              <TableCell>13</TableCell>
            </TableRow>
          </Table>
        </div>
        {/* graph of small devices */}
        <div className="w-full mt-20 p-3 md:hidden flex items-center flex-col bg-slate-200">
          <span className="text-xs mb-3 font-bold underline">
            THE GRAPH OF METRE READING AGAINST MONTH
          </span>
<div className="-ml-[2rem]">
<LineChart width={350} height={390} data={myData}>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid stroke="#000" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
</div>

        </div>

        {/* graph of large devices */}
        <div className="w-full p-8 mt-20 h-[40rem] hidden  md:flex items-center flex-col bg-slate-200">
          <span className="underline text-2xl font-bold">THE GRAPH OF METRE READING AGAINST MONTH</span>

          <LineChart width={600} height={400} data={myData}>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid stroke="#000" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
    </div>
  );
}

export default TenantDetail;
