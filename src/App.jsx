import React, { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import BlockPage from "./pages/BlockPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Rooms from "./pages/Rooms";
import TenantDetail from "./pages/TenantDetail";
function Skeleton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-full ">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex relative h-screen  w-full">
        <div
          className={` h-full w-full   duration-300  ${
            isOpen ? "basis-3/12" : "  basis-0 -ml-32"
          }`}
        >
          {<Sidebar isOpen={isOpen} />}
        </div>
        <div className={` ${isOpen ? " basis-9/12 " : "flex-1"} w-96   h-full`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Skeleton />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/blocks/:id" element={<BlockPage />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path='tenant/:id' element={<TenantDetail/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
