import React from "react";
import "./D-Goals.css";
import { Link } from "react-router-dom";

export default function Goals() {
  const stylesheet = {
    goal: {
      margin: "0%",
      padding: "0%",
      // display: "flex",
      // margin: ("10px", "30px"),
      // justifyContent: "space-between",
      // margin: "10px",
      // padding: "10px",
    },
    ul: {
      padding: "0%",
      margin: "0%",
      margin: "1%",
    },
    link: {
      display: "flex",
      flexDirection: "column",
      width: "150px",
      height: "100px",
      padding: "15px",
      justifyContent: "center",
      // fontStyle: "bold",
      fontWeight: 500,
      // borderRadius: "5px",

      color: "black",
      // backgroundColor: "#ffbd65",
      textDecoration: "none",
    },
    span: {
      textAlign: "center",
    },
  };

  return (
    <>
      <div style={stylesheet.goal} className="goals">
        <ul style={stylesheet.ul}>
          <li className="goals-item total-goals">
            <Link style={stylesheet.link} to="#">
              <span style={stylesheet.span}>Total Goals</span>
              <span style={stylesheet.span}>30</span>
            </Link>
          </li>
          <li className="goals-item yet-to-approved">
            <Link style={stylesheet.link} to="#">
              <span style={stylesheet.span}>Yet to Approved</span>
              <span style={stylesheet.span}>3</span>
            </Link>
          </li>

          <li className="goals-item approved-goals">
            <Link style={stylesheet.link} to="#">
              <span style={stylesheet.span}>Approved Goals</span>
              <span style={stylesheet.span}>12</span>
            </Link>
          </li>
          <li className="goals-item rejected-goals">
            <Link style={stylesheet.link} to="#">
              <span style={stylesheet.span}>Rejected Goals</span>
              <span style={stylesheet.span}>5</span>
            </Link>
          </li>

          <li className="goals-item completed-by-me">
            <Link style={stylesheet.link} to="#">
              <span style={stylesheet.span}>Completed by me</span>
              <span style={stylesheet.span}>8</span>
            </Link>
          </li>
          <li className="goals-item completed-by-manager">
            <Link style={stylesheet.link} to="#">
              <span style={stylesheet.span}>Completed by Manager</span>
              <span style={stylesheet.span}>5</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
// }
