import {React, useState, useEffect} from 'react'
import './Profile.css';
import axios from 'axios';

function Profile() {
  const[infoList, setInfoList]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:5000/api/info").then((response)=>{
      setInfoList(response.data)
    })
  },[]);
  
    return (
        
      <div>
       <u> <h5 style={{textAlign:'center',padding:'20px', color:'darkgreen'}}>Employee's Details</h5></u>
         {infoList.map((val)=>{
           return(
            <div className='maindiv'>

              <div className='cardss'>
                <h4>Basic_details</h4>
                <hr></hr>
                {/* <img className='image'  src='https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=170667a&w=0&h=BBXhuO36-UfqMS5aYkYvqjAuz3bO1GW-wiXGqRD1Sng='/>
                <h6>Name:{val.e_name} </h6>
                <h6>Email:{val.email}  </h6>
                <h6>Role_id:{val.role_id}</h6>
                <h6>Dept_id:{val.dept_id}</h6>
                <h6>E_DOB:cd1-1-1996</h6> */}
                
               
              </div>

                <div className='cardss'>
                  <h4>Joining_details</h4>
                  <hr></hr>
                  {/* <h6>Name:{val.e_name} </h6>
                <h6>Email:{val.email}  </h6>
                <h6>Role_id:{val.role_id}</h6>
                <h6>Dept_id:{val.dept_id}</h6>
                <h6>E_DOB:cd1-1-1996</h6> */}
                 
                </div>

            <div className='cardss'>
                  <h4>Project_details</h4>
                  <hr></hr>
                 
            </div>

            <div className='cardss'>
                <h4>Goals_details</h4>
                <hr></hr>
               
            </div>

            </div>
           )
         })}
      </div>    
    )
  }
 export default Profile;