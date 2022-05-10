import React, { useState } from "react";
// import React from "react";
import BarChart from "./BarChart/BarChart";
import { UserData } from "./BarChart/Data";

import "./Dashboard.css";

export default function Dashboard() {
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
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      {/* <div>
        <p>dashboard works</p>
        <p>graph</p>
        <p>total goals</p>
        <p>accepted goals</p>
        <p>rejected goals</p>
      </div> */}
    </>
  );
}
