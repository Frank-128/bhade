import axios from "axios";
import { useState,useEffect } from "react";
import { createContext,useContext } from "react";
import pusher from 'pusher-js'

const theContext = createContext();



export default function BhadeContext({children}){
    const [todoes,setTodoes] = useState([])
    const [notifications,setNotifications] = useState([])

    const fetchData = async()=>{
        const res = await axios.get('/allTasks');
        setTodoes(res.data.tasks)
      }
      useEffect(()=>{
        const pusherClient = new pusher('44e7ed9020a7add264d9',{
          cluster:'ap2'
        });
        const channel = pusherClient.subscribe('task-notifications')
        channel.bind('App\\Events\\TaskNotificationEvent',(data)=>{
          console.log("Task due and time reached: ",data);
          setNotifications([...notifications,data])
    
        });
        return ()=>{
          pusherClient.unsubscribe('task-notifications');
        }
      },[])
  return (
    <theContext.Provider value={{todoes,fetchData,notifications}}>
        {children}
    </theContext.Provider>
  )
}

export const useBhadeContext = ()=>{
    return useContext(theContext)
}