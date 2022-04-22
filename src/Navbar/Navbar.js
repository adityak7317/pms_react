import React from "react";
import "./Navbar.css";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import Goals from "../Goals/Goals";

export default function Navbar() {
  return (
    <>
      <nav>
        <img
          className="logo"
          src="https://www.ahana.co.in/wp-content/uploads/2019/09/logo-1.png"
          alt="logo"
        />
        {/* <Link to="/Goals">Goals</Link> */}
        <a href="/Dashboard">Dashboard</a>
        <a href="/Peoples">Peoples</a>
        <a href="/Goals">Goals</a>
        <a href="/Profile">Profile</a>
        {/* <Link to="/peoples">Peoples</Link> */}
        {/* <ul className="nav-items">
          {MenuItems.map((item, index) => {
            return (
              <>
                <li key={index}>
                  <Link className={item.cName} to={Dashboard}                    {item.title}
                  </Link>>
                </li>
              </>
            );
          })}
        </ul> */}
      </nav>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<Navbar />, rootElement);

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
// ----------------------------------------------

// return (
//   <>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <Link className="navbar-brand" to="/dashboard">
//         Navbar
//       </Link>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <Link className="nav-link" to="/dashboard">
//               Dashboard
//             </Link>
//           </li>
//           <li className="nav-item active">
//             <Link className="nav-link" to="/goals">
//               Goals
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/peoples">
//               Peoples
//             </Link>
//           </li>
//           <li className="nav-item"></li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/profile">
//               Profile
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   </>
// );

// --------------------------------------------------------

// <div className="header">
//         <p>Performance Management System</p>

//         <Link to={"/Goals"}>Goals </Link>
//         <Link to={"/Peoples"}>Peoples</Link>
//         <Link to={"/Dashboard"}>
//           {/* <DashboardIcon /> */}
//           Dashboard
//         </Link>
//         <Link to={"/Profile"}>Profile</Link>
//       </div>
