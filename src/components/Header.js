import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/dashboard">
          Navbar
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/goals">
                Goals
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/peoples">
                Peoples
              </Link>
            </li>
            <li className="nav-item"></li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

// <li className="nav-item dropdown">
//               <Link
//                 className="nav-link dropdown-toggle"
//                 to="#"
//                 id="navbarDropdown"
//                 role="button"
//                 data-toggle="dropdown"
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >
//                 Dropdown
//               </Link>
//               <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <Link className="dropdown-item" to="#">
//                   Action
//                 </Link>
//                 <Link className="dropdown-item" to="#">
//                   Another action
//                 </Link>
//                 <div className="dropdown-divider"></div>
//                 <Link className="dropdown-item" to="#">
//                   Something else here
//                 </Link>
//               </div>
//             </li>
