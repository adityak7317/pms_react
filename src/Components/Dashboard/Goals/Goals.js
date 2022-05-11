import React from "react";
import "./Goals.css";
import { Link } from "react-router-dom";

export default function Goals() {
  //   render() {
  return (
    <>
      (
      <div className="goals">
        <ul>
          <li className="goals-item">
            <Link to="#">
              <span>Total Goals</span>
              <span>30</span>
            </Link>
          </li>
          <li className="goals-item">
            <Link to="#">
              <span>Yet to Approved</span>
              <span>3</span>
            </Link>
          </li>

          <li className="goals-item">
            <Link to="#">
              <span>Approved Goals</span>
              <span>12</span>
            </Link>
          </li>
          <li className="goals-item">
            <Link to="#">
              <span>Rejected Goals</span>
              <span>5</span>
            </Link>
          </li>

          <li className="goals-item">
            <Link to="#">
              <span>Completed by me</span>
              <span>8</span>
            </Link>
          </li>
          <li className="goals-item">
            <Link to="#">
              <span>Completed by Manager</span>
              <span>5</span>
            </Link>
          </li>
        </ul>

        {/* <div className="goals-item total-goals">

</div>

<div className="goals-item pending-goals">

</div>

<div className="goals-item accepted-goals">

</div>

<div className="goals-item rejected-goals">

</div>

<div className="goals-item completed-by-me-goals">

</div>

<div className="goals-item completed-goals">

</div> */}
      </div>
      )
    </>
  );
}
// }
