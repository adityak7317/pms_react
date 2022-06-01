
import {React,useState,useEffect}from"react";
import axios from"axios";
import "./APCardVeiw.css"
//import img1 from ''

const APCardVeiw=()=>{
  const [dataList, setDataList]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:5000/api/get").then((response)=>{
      setDataList(response.data)
    })
  },[]);
   return(
       <div style={{marginTop:"20px"}}> 
              {dataList.map((val)=>{
                return(   
                    <div className="cardss">
                      {/* <div>
                        <img  className="imagee" src={img1}/>
                      </div> */}
                    <div className="card-items">
                        <p>{val.emp_name}</p>
                        <p>{val.email}</p>
                         <p>{val.phone}</p>
                     </div>
                     </div>     
                  )
              })}
    </div>
   );
  } ;
  export default APCardVeiw;