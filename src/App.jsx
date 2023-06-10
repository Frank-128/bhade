import React, { useState, useRef, useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import BlockPage from "./pages/BlockPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Rooms from "./pages/Rooms";
import TenantDetail from "./pages/TenantDetail";
import { Setting } from "./pages/Setting";
import { ChangePassword } from "./pages/ChangePassword";
import { Account } from "./pages/Account";
import { ChangeEmail } from "./pages/ChangeEmail";
import AddTenant from "./pages/AddTenant";
import EditTenant from "./pages/EditTenant";
import TodoList from "./pages/TodoList";
import AddBlock from "./pages/AddBlock";
import axios from "axios";
import Metre from "./pages/Metre";
  
axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config){
  const token = sessionStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` :"";
  return config;
});

function Skeleton() {
 
  const [isOpen, setIsOpen] = useState(false);

  const [window23, setWindow23] = useState(false);
  const location = useLocation();
  const routePath = location.pathname.split("/")[1];
  const [activeItem, setActiveItem] = React.useState(routePath || "dashboard");
  const handleActive = (tab) => {
    setActiveItem(tab);
  };
  const handleClick = (e) => {
    if (e.target.classList.contains("notify") === false) {
      setWindow23(true);
    }
  };
  
  return (
    <div onClick={handleClick} className="w-full xs:hidden  al:flex skeleton relative  h-full  flex-col">
   
      

      <Navbar
        isOpen={isOpen}
        handleActive={handleActive}
        window23={window23}
        setWindow23={setWindow23}
        setIsOpen={setIsOpen}
        
      />
      
      <div className="flex relative h-screen basis-7/12 w-full">
        <div
          className={` h-full w-full  duration-300  ${
            isOpen ? "basis-3/12  " : "  basis-0"
          }`}
        >
          {
            <Sidebar
              handleActive={handleActive}
              isOpen={isOpen}
              routePath={routePath}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              setIsOpen={setIsOpen}
            />
          }
        </div>
        <div
          className={` ${
            isOpen ? " basis-9/12  z-10 al:hidden ml:block " : "flex-1"
          } w-96 skeleton  h-full `}
        >
          <Outlet />
        </div>
      </div>
      <footer className="bg-slate-300 h-96 flex flex-col gap-y-3 basis-2/12 justify-center  items-center ">
        <div>
          {" "}
          <span className={"font-bold text-3xl text-slate-800"}>
            {" "}
            BHADE
          </span>{" "}
          <span>&copy;2023</span>
        </div>
        <div>
          {" "}
          <p className={"text-xl font-bold"}>Contact Developers</p>
        </div>
        <div>
          <i>Frank Ndagula | Salim Mchomvu | Denis Mgaya</i>
        </div>
        <div> Copyright@2023</div>
      </footer>
    </div>
  );
  s;
  an;
}
function App() {
  const [openSnac,setOpenSnac]= useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setOpenSnac={setOpenSnac} />} />
        <Route path="/" element={<Skeleton />}>
          <Route path="/" element={<Dashboard setOpenSnac={setOpenSnac} openSnac={openSnac}/>} />
          <Route path="/blocks/:id" element={<BlockPage />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/tenant/:id" element={<TenantDetail />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/addTenant" element={<AddTenant />} />
          <Route path="/editTenant" element={<EditTenant />} />
          <Route path="/addBlock" element={<AddBlock />} />    
          <Route path="/metre" element={<Metre/>} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/accounts" element={<Account />} />
          <Route path="/changeemail" element={<ChangeEmail />} />
          <Route path="*" element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
