
import {React,useState,useEffect}from"react";
import axios from"axios";
import "./MTCardVeiw.css"
//import img1 from ''


const MTCardVeiw=()=>{
  const [dataList, setDataList]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:5000/api/get").then((response)=>{
      setDataList(response.data)
    })
  },[]);
   return(
     
    <div style={{marginTop:"20px"}}>
      <h2 className="head" >Team head</h2>
      <div className="cardss">
                      {/* <div>
                        <img  className="imagee" src={img1}/>
                      </div> */}
                    <div className="card-items">
                        <p>Name: Group Head</p>
                        <p>Email:sir@gmail.com</p>
                         <p>Address: asdfasdfasdf</p>
                     </div>
                     </div>
      
      <h2 className="head" >Team members</h2>
     
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
  export default MTCardVeiw;