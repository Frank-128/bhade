import { Table, TableRow, TableCell } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function TenantDetail() {
  return (
    <div className="h-fit p-4 flex flex-col  bg-gray-700">
      <span className="pl-16 mb-3 text-3xl">Tenant Details</span>
      <div className="flex justify-around">
        <div className="w-2/4 h-screen flex flex-col justify-around bg-slate-200 rounded">
          <div className="flex justify-between px-36 pt-20 text-3xl">
            <i className="font-bold ">Name : </i>
            <span>Filbert Henry</span>
          </div>

          <div className="flex justify-between px-36 py-3  text-3xl">
            <i className="font-bold ">Contact : </i>
            <span>0745454545</span>
          </div>
          <div className="flex justify-between px-36 py-3  text-3xl">
            <i className="font-bold ">Contract startdate : </i>
            <span>12/3/2022</span>
          </div>
          <div className="flex justify-between px-36 py-3  text-3xl">
            <i className="font-bold ">Contract endDate : </i>
            <span>12/3/2024</span>
          </div>
          <div className="flex justify-between px-36 py-3  text-3xl">
            <i className="font-bold ">Metre Number : </i>
            <span>1122334455</span>
          </div>
          <div className="flex justify-between px-36 py-3  text-3xl">
            <i className="font-bold ">Current Metre Reading : </i>
            <span>34</span>
          </div>
          <div className="flex justify-between px-36 py-3  text-3xl">
            <i className="font-bold ">Luku No : </i>
            <span>2233114455</span>
          </div>
          <div className="flex justify-between px-36 py-3  text-3xl">
            <i className="font-bold ">Total Amount : </i>
            <span>2400000</span>
          </div>
          <div className="flex justify-between px-36 py-3  text-3xl">
            <i className="font-bold ">Amount paid : </i>
            <span>2000000</span>
          </div>
          <div className="flex justify-between px-36 py-3 pb-24 text-3xl">
            <i className="font-bold ">Remaining amount : </i>
            <span>400000</span>
          </div>
        </div>

        <div className=" bg-slate-200 rounded-xl p-5 flex flex-col items-center text-3xl">
          <i className="font-bold ">Contract : </i>
          <span>
            <embed
              src="/LogBook.pdf"
              width="700"
              height="800"
              type="application/pdf"
            />
          </span>
        </div>
      </div>

      <div className="ml-16 mt-14">
        <span className="font-bold ">Monthly metre reading</span>
        <Table style={{ width: "70%" }}>
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
            <TableCell>13</TableCell>
          </TableRow>
        </Table>
        <div className="w-3/4 mt-20 h-[40rem] bg-red-900">THE GRAPH</div>
      </div>
    </div>
  );
}

export default TenantDetail;
