import React from "react";
import "./D-Goals.css";
import { Link } from "react-router-dom";
import Approved from "../../Goals/D-Goals/Approved";
import CompletedByManager from "../../Goals/D-Goals/CompletedByManager";
import CompletedByMe from "../../Goals/D-Goals/CompletedByMe";
import Rejected from "../../Goals/D-Goals/Rejected";
import Total from "../../Goals/D-Goals/Total";
import YetToApproved from "../../Goals/D-Goals/YetToApproved";

export default function Goals() {
  const style = {
    goals: {
      // margin: "0%",
      // padding: "0%",
      // display: "flex",
      // margin: ("10px", "30px"),
      // justifyContent: "space-between",
      // margin: "10px",
      // padding: "10px",
    },
    ul: {
      padding: "0%",
      // margin: "0%",
      // margin: "1%",
      listStyle: "none",
    },
    link: {
      margin: "9px",
      border: "1px solid black",
      display: "flex",
      flexDirection: "column",
      width: "200px",
      height: "55px",
      // padding: "15px",
      justifyContent: "center",
      // fontStyle: "bold",
      fontWeight: 500,
      borderRadius: "5px",

      color: "black",
      backgroundColor: "#E9EAFB",
      textDecoration: "none",
      // padding: "0%",
    },
    span: {
      textAlign: "center",
    },
  };

  return (
    <>
      <div style={style.goals} className="goals">
        <ul style={style.ul}>
          <li className="goals-item total-goals">
            <Link style={style.link} to="/Total">
              <span style={style.span}>Total Goals</span>
              <span style={style.span}>30</span>
            </Link>
          </li>
          <li className="goals-item yet-to-approved">
            <Link style={style.link} to="/YetToApproved">
              <span style={style.span}>Yet to Approved</span>
              <span style={style.span}>3</span>
            </Link>
          </li>

          <li className="goals-item approved-goals">
            <Link style={style.link} to="/Approved">
              <span style={style.span}>Approved Goals</span>
              <span style={style.span}>12</span>
            </Link>
          </li>
          <li className="goals-item rejected-goals">
            <Link style={style.link} to="/Rejected">
              <span style={style.span}>Rejected Goals</span>
              <span style={style.span}>5</span>
            </Link>
          </li>

          <li className="goals-item completed-by-me">
            <Link style={style.link} to="/CompletedByMe">
              <span style={style.span}>Completed by me</span>
              <span style={style.span}>8</span>
            </Link>
          </li>
          <li className="goals-item completed-by-manager">
            <Link style={style.link} to="/CompletedByManager">
              <span style={style.span}>Completed by Manager</span>
              <span style={style.span}>5</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
// }
