import React from "react";
import "./Navbar.css";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import { BiUserPin } from "@react-icons/all-files/bi/BiUserPin";
import { RiDashboardFill } from "@react-icons/all-files/ri/RiDashboardFill";
import { ImProfile } from "@react-icons/all-files/im/ImProfile";
import { MdPeople } from "@react-icons/all-files/md/MdPeople";
import { BiTask } from "@react-icons/all-files/bi/BiTask";
import { FaUserTie } from "@react-icons/all-files/fa/FaUserTie";
import { RiFeedbackLine } from "@react-icons/all-files/ri/RiFeedbackLine";
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut";

export default function Navbar() {
  const style = {
    nav: {
      padding: "0%",
      margin: "0%",
      width: "100%",
      // backgroundColor: "#DEDFFC",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      fontFamily: "sans-serif",
      padding: "0.3%",
      // borderBottom: "3px solid black",
    },
    navBar: {
      padding: "0%",
      margin: "0%",
      // border: "1px solid black",
    },
    navContent: {
      margin: "0%",
      // padding: "0%",
      padding: "0.3%",
      width: "80%",
      display: "flex",
      flexDirection: "column",
    },

    ul: {
      margin: "0%",
      padding: "0.37%",
      listStyle: "none",
      display: "flex",
      justifyContent: "space-around",
      textTransform: "uppercase",
      // fontSize: "15px",
    },
    drop: {
      padding: "1.5%",
      paddingBottom: "0%",
      margin: "0%",
      width: "10%",
      display: "flex",
      flexDirection: "column",
      // backgroundColor: "#DEDFFC",
    },
    link: {
      textDecoration: "none",
      color: "black",
    },
  };

  return (
    <>
      <nav style={style.nav}>
        {/* <div style={style.navBar} className="nav-bar"> */}
        <div className="logo">
          <Link to="/">
            <img
              className="company-logo"
              src="https://www.ahana.co.in/wp-content/uploads/2019/09/logo-1.png"
              alt="ahana logo"
            />
          </Link>
        </div>
        <div className="nav-content" style={style.navContent}>
          <div className="heading">
            <span>
              <h4 style={{ margin: "0%", padding: "0%" }}>
                Performance Management System
              </h4>
            </span>
          </div>
          <div className="nav-menu">
            <ul style={style.ul}>
              <li>
                <Link style={style.link} to="/Dashboard" className="menu-name">
                  {/* <RiDashboardFill /> */}
                  Dashboard
                </Link>
              </li>
              <li>
                <Link style={style.link} to="/Goals" className="menu-name">
                  {/* <BiTask /> */}
                  Goals
                </Link>
              </li>
              <li>
                <Link style={style.link} to="/Peoples" className="menu-name">
                  {/* <MdPeople /> */}
                  Peoples
                </Link>
              </li>
            
              <li>
                <Link style={style.link} to="/Feedback" className="menu-name">
                  {/* <RiFeedbackLine /> */}
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div style={style.drop} className="drop">
          <div className="dropdown">
            <Link to="/Profile">
              <button className="dropbtn">
                <span>
                  <FaUserTie />
                </span>
              </button>
            </Link>
            <div className="dropdown-content">
              
              <Link className="dropdown-item" to="#">
                {/* <BiUserPin /> */}
                 Roles
              </Link>
              <Link  className="dropdown-item" style={style.link} to="/profile" >
                  {/* <ImProfile /> */}
                  Profile
                </Link>
              <Link className="dropdown-item" to="/Login">
                {/* <FiLogOut /> */}
                 Logout
              </Link>
            </div>
          </div>
          <span>username</span>
        </div>
        {/* </div> */}
      </nav>
    </>
  );
}

// <div className="header">
// <div className="logo">

// </div>
// <div className="nav-container">
//   <div>
//     <span>
//       <h3>Performance Management System</h3>
//     </span>
//   </div>
//   <div className="nav-content">
//     <div className="nav-menu">

//     </div>

//   </div>
// </div>
// </div>
