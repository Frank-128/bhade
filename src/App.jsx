import React, { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import BlockPage from "./pages/BlockPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Rooms from "./pages/Rooms";
import TenantDetail from "./pages/TenantDetail";
import {Setting} from "./pages/Setting";
import { ChangePassword } from "./pages/ChangePassword";
import { Account } from "./pages/Account";
import { ChangeEmail } from "./pages/changeEmail";
import AddTenant from "./pages/AddTenant";
import EditTenant from "./pages/EditTenant";
import AddRooms from "./pages/AddRooms";
import TodoList from "./pages/TodoList";
import AddBlock from "./pages/AddBlock";

function Skeleton() {
  const [isOpen, setIsOpen] = useState(false);
    const [window, setWindow]= useState(false);
    const handleClick = (e)=>{



        if(e.target.classList.contains('notify')===false){

            setWindow(true);
        }
    }
  return (
    <div onClick={handleClick} className="w-full skeleton  h-full ">
      <Navbar isOpen={isOpen} window={window} setWindow={setWindow} setIsOpen={setIsOpen} />
      <div className="flex relative h-screen  w-full">
        <div
          className={` h-full w-full   duration-300  ${
            isOpen ? "basis-3/12" : "  basis-0 -ml-32"
          }`}
        >
          {<Sidebar isOpen={isOpen} />}
        </div>
        <div className={` ${isOpen ? " basis-9/12 " : "flex-1"} w-96 skeleton  h-full`}>
          <Outlet />
        </div>
      </div>
          <footer className="bg-slate-300  h-96 flex flex-col gap-y-3 justify-center  items-center pb-28">
           <div>  <span className={'font-bold text-3xl text-slate-800'}> BHADE</span> <span>&copy;2023</span></div>
           <div> <p className={'text-xl font-bold'}>Contact Developers</p></div>
              <div><i>Frank Ndagula | Salim Mchomvu | Denis Mgaya</i></div>
              <div> Copyright@2023</div>
        </footer>
    </div>
  );s
an}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Skeleton />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/blocks/:id" element={<BlockPage />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path='/tenant/:id' element={<TenantDetail/>} />
          <Route path='/settings' element={<Setting/>}/>
          <Route path='/addTenant' element={<AddTenant/>} />
          <Route path='/editTenant' element={<EditTenant/>} />
          <Route path='/addBlock' element={<AddBlock/>} />
          <Route path='/addRoom' element={<AddRooms/>} />
          <Route path='/todolist' element={<TodoList/>} />
          <Route path='/changepassword' element={<ChangePassword/>}/>
          <Route path='/accounts' element={<Account/>}/>
          <Route   path='/changeemail' element={<ChangeEmail/>}/>  
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
