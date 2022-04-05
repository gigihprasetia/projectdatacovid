import {React,useState} from 'react'
import {AiOutlineDashboard} from "react-icons/ai"
const Drawer = ({sidebar,setSidebar}) => {
  


  return (
    <div className={`w-36 h-screen border-r-2 border-slate-300 absolute bg-white z-10  ${sidebar? "left-0 duration-500" :" duration-500 left-[-145px]"} `}>
      <div className={"flex justify-evenly items-center bg-slate-300 mt-3 py-2"} >
<AiOutlineDashboard/>
      <p >Dashboard</p>
      </div>
    </div>
  )
}

export default Drawer