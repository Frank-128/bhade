import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login({setOpenSnac}) {

  const [email, setEmail]=useState("");
  const [password, setPassword]= useState("");
  const [error,setError] = useState("")
  const navigate = useNavigate();
  const loginSubmit = async (e)=>{
    e.preventDefault();

    try{
      
      
        axios.post("/login",{email, password}).then(res=>{
          
     if(res.data.status === 200 ){
      sessionStorage.setItem("token", res.data.token);
      setOpenSnac(true);
      navigate('/');
      


     }else if(res.data.status === 401){
     setError(res.data.message)
     }
        })
     
    

    }catch(err){
      setError(err);
    }

  }


  return (
    <div className=" flex w-full h-full bg-slate-300  flex-col items-center justify-center absolute">
        <div className="absolute top-32">
<i>            <b className=" xs:hidden md:block al:hidden text-slate-700 text-6xl drop-shadow-2xl ">BHADE</b>
</i>        </div>
      
      <form onSubmit={loginSubmit}  className="bg-slate-100   md:w-1/2 al:w-full xl:w-1/4 al:h-full al:rounded md:rounded-xl  md:h-1/3 rounded-2xl items-center justify-center flex flex-col">
     
        <div className="mb-16 md:m-0">
            <b className="text-slate-700   md:hidden al:block text-3xl">BHADE</b>
        </div>
        {error && <span className="text-red-500">{error}</span>}
        <div>
          <p>
            {" "}
            <label htmlFor="email" className="text-gray-700">email</label>
          </p>
          <input id='email' type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className=" border-2 p-1 border-blue-400 rounded-xl" />
        </div>

        <div>
          <p>
            {" "}
            <label htmlFor="password" className="text-gray-700">password</label>
          </p>{" "}
          <input id='password' type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className=" p-1 border-blue-400 border-2 rounded-xl" />
        </div>
        <div className="flex justify-center w-full">
            <button type="submit" className="bg-blue-400 text-white m-4 p-2 w-1/4 rounded-2xl">LOGIN</button>
        </div>
        <span><p className="text-blue-400">Forgot password?</p></span>
      </form>
    </div>
  );
}

export default Login;
