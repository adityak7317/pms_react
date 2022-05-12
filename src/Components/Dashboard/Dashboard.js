import React, { useState } from "react";
import { Link } from "react-router-dom";
import BarChart from "./BarChart/BarChart";
import { UserData } from "./BarChart/Data";
// import { Goals } from "./Goals/Goals";

import "./Dashboard.css";
import Goals from "./D-Goals/D-Goals";

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
      <div className="dashboard">
        <div className="goals">
          <Goals />
        </div>
        <div className="Bar">
          <div style={{ width: 700 }}>
            <BarChart chartData={userData} />
          </div>
        </div>
      </div>
    </>
  );
}
