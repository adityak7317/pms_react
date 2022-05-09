import React from "react";
import "./Navbar.css";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import { RiDashboardFill } from "@react-icons/all-files/ri/RiDashboardFill";
import { MdPeople } from "@react-icons/all-files/md/MdPeople";
import { BiTask } from "@react-icons/all-files/bi/BiTask";
import { FaUserTie } from "@react-icons/all-files/fa/FaUserTie";
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut";
import { IoMdArrowDropdown } from "@react-icons/all-files/io/IoMdArrowDropdown";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="header">
          <img
            className="logo"
            src="https://www.ahana.co.in/wp-content/uploads/2019/09/logo-1.png"
            alt="ahana logo"
          />
          <h3>Performance Management System</h3>
          <Link to="#" className="menu_name">
            <FaUserTie />
            <IoMdArrowDropdown />
          </Link>
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
              <Link to="/Peoples" className="menu_name">
                <MdPeople />
                Peoples
              </Link>
            </li>
            <li>
              <Link to="/Goals" className="menu_name">
                <BiTask />
                Goals
              </Link>
            </li>
            <li>
              <Link to="/Profile" className="menu_name">
                <FaUserTie />
                Profile
              </Link>
            </li>
          </ul>
        </div>
        {/*  */}
        <form>
          <label></label>
        </form>
      </nav>
    </>
  );
}

// <select name="cars" id="cars">
// <option>Volvo</option>
// <option>lygs</option>
// <option>Opel</option>
// <option>Audi</option>
// </select>

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Navbar />, rootElement);
