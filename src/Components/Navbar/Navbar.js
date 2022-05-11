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
          {/* logo */}
          <div className="logo">
            <Link to="/">
              <img
                className="company-logo"
                src="https://www.ahana.co.in/wp-content/uploads/2019/09/logo-1.png"
                alt="ahana logo"
              />
            </Link>
          </div>
          {/* navcontainer */}
          <div className="nav-container">
            <div>
              <span>
                <h3>Performance Management System</h3>
              </span>
            </div>
            <div className="nav-content">
              <div>
                <div className="nav-menu">
                  <ul>
                    <li>
                      <Link to="/Dashboard" className="menu-name">
                        <RiDashboardFill />
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to="/Goals" className="menu-name">
                        <BiTask />
                        Goals
                      </Link>
                    </li>
                    <li>
                      <Link to="/Peoples" className="menu-name">
                        <MdPeople />
                        Peoples
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="dropdown">
                <button className="dropbtn">
                  <FaUserTie />
                </button>
                <div className="dropdown-content">
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
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
