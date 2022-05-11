import React, { useState } from "react";
import { Link } from "react-router-dom";
import BarChart from "./BarChart/BarChart";
import { UserData } from "./BarChart/Data";
// import { Goals } from "./Goals/Goals";

import "./Dashboard.css";
import Goals from "./Goals/Goals";

export default function Dashboard() {
  /*data of barchart*/
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "User Gained",
        data: UserData.map((data) => data.userGain),
        // backgroundColor: ["#fab73fb0"],
      },
    ],
  });

  return (
    <>
      <div>
        <div className="goals">
          <Goals />
        </div>

        {/* <div className="goals">
        <div className="goals-item total-goals">
          <Link>
            <span>Total Goals</span>
            <span>30</span>
          </Link>
        </div>

        <div className="goals-item pending-goals">
          <Link>
            <span>Pending with Manager</span>
            <span>3</span>
          </Link>
        </div>

        <div className="goals-item accepted-goals">
          <Link>
            <span>Accepted Goals</span>
            <span>12</span>
          </Link>
        </div>

        <div className="goals-item rejected-goals">
          <Link>
            <span>Rejected Goals</span>
            <span>5</span>
          </Link>
        </div>

        <div className="goals-item completed-by-me-goals">
          <Link>
            <span>Completed by me Goals</span>
            <span>8</span>
          </Link>
        </div>

        <div className="goals-item completed-goals">
          <Link>
            <span>Completed by Manager</span>
            <span>5</span>
          </Link>
        </div>
      </div> */}

        <div className="Bar">
          <div style={{ width: 700 }}>
            <BarChart chartData={userData} />
          </div>
        </div>
        {/* <div>
        <p>dashboard works</p>
        <p>graph</p>
        <p>total goals</p>
        <p>accepted goals</p>
        <p>rejected goals</p>
      </div> */}
      </div>
    </>
  );
}
