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
  return (
    <>
      <nav>
        <div className="header">
          <Link to="/">
            <img
              className="logo"
              src="https://www.ahana.co.in/wp-content/uploads/2019/09/logo-1.png"
              alt="ahana logo"
            />
          </Link>
          <h3>Performance Management System</h3>
        </div>

        <div className="nav-container">
          <ul>
            <li className="nav-content">
              <Link to="/Dashboard" className="menu_name">
                <RiDashboardFill />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/Goals" className="menu_name">
                <BiTask />
                Goals
              </Link>
            </li>
            <li>
              <Link to="/Peoples" className="menu_name">
                <MdPeople />
                Peoples
              </Link>
            </li>
          </ul>
          <div className="userdropdown">
            {/* <div className="user"> */}
            <button
              className="dropdown-toggle btn"
              type="button"
              data-target="#dropleft"
              data-toggle="dropdown"
            >
              <FaUserTie />
            </button>
            {/* <p>Username</p> */}
            {/* </div> */}

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to="/Profile">
                <ImProfile /> Profile
              </Link>
              <Link className="dropdown-item" to="#">
                <BiUserPin /> Roles
              </Link>
              <Link className="dropdown-item" to="/Feedback">
                <RiFeedbackLine /> Feedback
              </Link>
              <Link className="dropdown-item" to="/Login">
                <FiLogOut /> Logout
              </Link>
            </div>
          </div>
          {/* <li>
              <Link to="/Profile" className="menu_name">
                <FaUserTie />
                Profile
              </Link>
            </li> */}
          {/* </ul> */}
        </div>
      </nav>
    </>
  );
}
