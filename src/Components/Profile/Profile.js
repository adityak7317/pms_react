
import {React,useState,useEffect}from"react";
import axios from"axios";
import "./Profile.css"
import img1 from '../images/profile.jpg';
import {Line} from "react-chartjs-2"

import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement,PointElement,LineElement, Title, Tooltip, Legend,} from "chart.js";ChartJS.register( CategoryScale, LinearScale, ArcElement,PointElement,LineElement, Title, Tooltip, Legend);

const Peoples=()=>{
  const [infoList, setdataList]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:5000/api/info").then((response)=>{
      setdataList(response.data)
    })
  },[]);
 

   return(
     
    <div>
              {infoList.map((val)=>{
                return(
                    <div > 
                         <div className="cards">
                         <u><h5>Basic details</h5></u><br></br>
                            <div  style={{display:"flex",paddingLeft:"100px"}}>
                        <div >
                          <img className="image" src="https://avatars.githubusercontent.com/u/78901457?v=4"/>
                        </div>
                        <div style={{paddingLeft:"100px"}}>
                          <p >
                            <span> Name : </span>
                            <span style={{paddingLeft:"63px"}}> {val.emp_name}</span>
                            </p>
                          <p>
                            <span> Email : </span>
                            <span style={{paddingLeft:"68px"}}> {val.email}</span>
                            </p>
                          <p>
                            <span> Phone : </span>
                            <span style={{paddingLeft:"60px"}}> {val.phone}</span>
                            </p>
                          <p>
                            <span> Role : </span>
                            <span style={{paddingLeft:"74px"}}> {val.role_name}</span>
                            </p>
                          <p>
                            <span> Code : </span>
                            <span style={{paddingLeft:"67px"}}> {val.emp_code}</span>
                            </p>
                          <p>
                            <span> Department : </span>
                            <span style={{paddingLeft:"20px"}}> {val.dept_name}</span> 
                          </p>   
                        </div> 
                        </div>      
                      </div>

                      
                      <div className="cards">
                      <u><h5>Functional details</h5></u><br></br>
                      <div style={{paddingLeft:"100px"}}>
                          <p >
                            <span> Date of Joining : </span>
                            <span style={{paddingLeft:"53px"}}> 1/1/2022</span>
                            </p>
                          <p>
                            <span> Functional Practice : </span>
                            <span style={{paddingLeft:"30px"}}> ADM</span>
                            </p>
                          <p>
                            <span> Reporting Manager : </span>
                            <span style={{paddingLeft:"23px"}}> Sudheendra Gururaj M P</span>
                            </p>
                          <p>
                            <span> Group Head : </span>
                            <span style={{paddingLeft:"73px"}}> Sudheendra Gururaj M P</span>
                            </p>
                          <p>
                            <span> Group Name : </span>
                            <span style={{paddingLeft:"67px"}}> Digital Transformation Services
</span>
                            </p>
                       
                        </div> 
                      </div>
                      
                      <div className="cards">
                      <u><h5>Project details</h5></u><br></br>
                      <div style={{paddingLeft:"100px"}}>
                          <p >
                            <span> Project Name : </span>
                            <span style={{paddingLeft:"68px"}}> Performance Management System</span>
                            </p>
                          <p>
                            <span> Functional Practice : </span>
                            <span style={{paddingLeft:"30px"}}> ADM</span>
                            </p>
                          <p>
                            <span> Reporting Manager : </span>
                            <span style={{paddingLeft:"23px"}}> Sudheendra Gururaj M P</span>
                            </p>
                          <p>
                            <span> Group Head : </span>
                            <span style={{paddingLeft:"73px"}}> Sudheendra Gururaj M P</span>
                            </p>
                          <p>
                            <span> Group Name : </span>
                            <span style={{paddingLeft:"67px"}}> Digital Transformation Services
</span>
                            </p>
                       
                        </div> 
                      </div>
                      

                      <div className="cards4"> 
                      <u><h5>Goals details</h5></u><br></br>
                      <div>
                                <Line    
                                  data={{
                                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                                      datasets:[
                                        {
                                        label:'# of votes',
                                        data:[12, 19,3,5,2,3],
                                        backgroundColor:[
                                          'rgba(255, 99, 132, 0.2)',
                                          'rgba(54, 162, 235, 0.2)',
                                          'rgba(255, 206, 86, 0.2)',
                                          'rgba(75, 192, 192, 0.2)',
                                          'rgba(153, 102, 255, 0.2)',
                                          'rgba(255, 159, 64, 0.2)'
                                        ],
                                        borderColor: [
                                          'rgba(255, 99, 132, 1)',
                                          'rgba(54, 162, 235, 1)',
                                          'rgba(255, 206, 86, 1)',
                                          'rgba(75, 192, 192, 1)',
                                          'rgba(153, 102, 255, 1)',
                                          'rgba(255, 159, 64, 1)'
                                      ],
                                      borderWidth:1
                                      },
                                      ],
                                  }}
                                  width={250}
                                  height={275}
                                  options={{
                                    maintainAspectRatio:false,
                                    scales: {
                                      y: {
                                          beginAtZero: true
                                      }
                                  }
                                  }}
                                
                                />
                                </div>
                                  </div>
                                    </div>
                                )
                            })}  
                            
                              </div>
                            );
  } ;
  export default Peoples;