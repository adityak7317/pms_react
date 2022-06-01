import {React,useState,useEffect}from"react";
import"./APColVeiw.css";
import axios from"axios";
import APCardVeiw from "../CardVeiw/APCardVeiw"


const APColVeiw=()=>{
const [dataList, setDataList]=useState([]);

useEffect(()=>{
  axios.get("http://localhost:5000/api/get").then((response)=>{
    setDataList(response.data)
  })
},[]);

const [toggle, setToggle]=useState(true)
const handleClick=()=>{
  setToggle(!toggle)
}
if(toggle){

 return(
  <div >
    <button style={{marginLeft:"1180px"}} onClick={()=>setToggle(!toggle)} className="btn btn-secondary mb-5">CardVeiw</button>
    
     {toggle &&(
       
    <table className="styled-table" >
         <thead>
             <tr>
             <th style={{textAlign:"center"}}>emp_no</th>
                 <th style={{textAlign:"center"}}>emp_code</th>
                 <th style={{textAlign:"center"}}>emp_name</th>
                 <th style={{textAlign:"center"}}>email</th>
                 <th style={{textAlign:"center"}}>phone</th>
                 <th style={{textAlign:"center"}}>role_name</th>
                 <th style={{textAlign:"center"}}>dept_name</th>
             </tr>
         </thead>
          <tbody >
            {dataList.map((val)=>{
              return(
                  <tr>
                     <td style={{textAlign:"center"}}>{val.emp_no}</td>
                      <td style={{textAlign:"center"}}>{val.emp_code}</td>
                      <td style={{textAlign:"center"}}>{val.emp_name}</td>
                        <td style={{textAlign:"center"}}>{val.email}</td>
                        <td style={{textAlign:"center"}}>{val.phone}</td>
                        <td style={{textAlign:"center"}}>{val.role_name}</td>
                        <td style={{textAlign:"center"}}>{val.dept_name}</td>
                    </tr> 
                )
            })}
         </tbody> 
       </table>
       )}  
  </div>
 );
}
else{
  return(
      <div>
        <APCardVeiw/>
      </div>
    ) 
  }
}
export default APColVeiw;