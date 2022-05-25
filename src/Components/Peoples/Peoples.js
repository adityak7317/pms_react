
import {React,useState,useEffect}from"react";
import axios from"axios";
import "./Peoles.css"
import img1 from '../images/profile.jpg'


const Peoples=()=>{
  const [dataList, setDataList]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:5000/api/get").then((response)=>{
      setDataList(response.data)
    })
  },[]);
   return(
     
    <div style={{marginTop:"20px"}}>
      <h2 className="head" >Team head</h2>
      <div className="cards">
                      <div>
                        <img  className="image" src={img1}/>
                      </div>
                    <div className="card-items">
                        <p>Name: Group Head</p>
                        <p>Email:sir@gmail.com</p>
                         <p>Address: asdfasdfasdf</p>
                     </div>
                     </div>
      
      <h2 className="head" >Team members</h2>
     
              {dataList.map((val)=>{
                return(
  
                  
                     
                    <div className="cards">
                      <div>
                        <img  className="image" src={img1}/>
                      </div>
                    <div className="card-items">
                        <p>{val.e_name}</p>
                        <p>{val.email}</p>
                         <p>{val.ph_number}</p>
                     </div>
                     </div>
               
                      
                  )
              })}
           
    </div>
   );
  } ;
  export default Peoples;