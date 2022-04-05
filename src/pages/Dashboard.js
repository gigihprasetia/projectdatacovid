import { React, useEffect, useState } from "react";
import axios from "axios";
import BasicSelect from "../component/BasicSelect";
import Drawer from "../component/Drawer";
import { GiHamburgerMenu } from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai"
import Table from "../component/TableCom";
import TableCom from "../component/TableCom";

const Dashboard = () => {
    const [sidebar,setSidebar]=useState(false);
  const [provinsis, setProvinsis] = useState();
  const[selectprovinsi,setSelectProvinsi]=useState('')
  const[selectcity,setSelectCity]=useState('')
  const [city, setCitys] = useState('');
  const [tabledata,setTableData]=useState([])

  useEffect(() => {
    getProvinsi();
    getCity()
  }, [selectprovinsi]);

  async function getProvinsi() {
    const resultProv = await axios.post(
      `https://kipi.covid19.go.id/api/get-province`
    );
    try {
      setProvinsis(resultProv.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCity() {
    const resultCity = await axios.post(
      `https://kipi.covid19.go.id/api/get-city?start_id=${selectprovinsi}`
    );
    try {
      setCitys(resultCity.data.results);
    } catch (error) {
      console.log(error);
    }
  }

const getData =async()=>{
  const resultData = await axios.get(`https://kipi.covid19.go.id/api/get-faskes-vaksinasi?skip=0&province=${selectprovinsi}&city=${selectcity}`)
  try {
    setTableData(resultData.data.data)
    console.log(resultData.data.data)
  } catch (error) {
    console.log(error)
  }
}


console.log(selectcity,selectprovinsi)

  return (
    <div>
      {provinsis ? (
        <div>
          <div
            className={
              "w-full h-16 flex items-center justify-between px-5 bg-blue-400 "
            }
          >
              {
                  sidebar?(
                    <button onClick={()=>{setSidebar(!sidebar)}} className={' hover:bg-red-300  bg-red-400 rounded-sm w-7 h-7 flex items-center justify-center'}>
                    <AiOutlineClose className="text-white" />
                      </button>
                  ):(
                    <button  onClick={()=>{setSidebar(!sidebar)}}  className={' hover:bg-blue-300 rounded-sm w-7 h-7 flex items-center justify-center'}>
                    <GiHamburgerMenu className="text-white" />
                      </button>
                  )
              }
            <p className={" text-lg font-bold text-white"}>
              GIGIH PRASETIA DATA COVID
            </p>
          </div>
          <div className="w-full flex">
              <Drawer sidebar={sidebar} setSidebar={setSidebar}/>
            <div className={"w-full flex flex-col justify-center"}>
              <div className={'w-full flex justify-around'}>
              
              <BasicSelect  data={provinsis} setSelect={setSelectProvinsi} select={selectprovinsi} namaLabel={"Provinsi"} />
           
              <BasicSelect data={city} setSelect={setSelectCity} select={selectcity} namaLabel={"Kabupaten"}/>
             
           
              <button onClick={()=>{getData()}} className={"outline outline-1 outline-slate-400 rounded-sm w-24 h-12 mt-6 "}>SEARCH</button>             
              </div>
              {
                tabledata? (              <TableCom tabledata={tabledata}/>
                ):(<p>LOADING</p>)
              }
            </div>
          </div>
         
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Dashboard;
