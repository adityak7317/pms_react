import React, { useState } from "react";
import { Link } from "react-router-dom";
import BarChart from "./BarChart/BarChart";
import { RateData } from "./BarChart/Data";
// import { Goals } from "./Goals/Goals";

import "./Dashboard.css";
import Goals from "./D-Goals/D-Goals";

export default function Dashboard() {
  /*data of barchart*/
  const [rateData, setRateData] = useState({
    labels: RateData.map((data) => data.month),
    datasets: [
      {
        label: "Rate Gained",
        data: RateData.map((data) => data.rate),
        // backgroundColor: ["#fab73fb0"],
      },
    ],
  });

  const style = {
    bar: {
      padding: "0%",
      margin: "0%",
      display: "flex",
      flexDirection: "column",
    },
    avg: {
      // margin: "3%",
      // justifyItems: "center",
    },
  };

  return (
    <>
      <div className="dashboard">
        <div className="goals">
          <Goals />
        </div>
        <div className="bar" style={style.bar}>
          <div style={{ width: 700 }}>
            <BarChart chartData={rateData} />
          </div>
          <div className="average" style={style.avg}>
            <span>Average Rating : 6.4</span>
          </div>
        </div>
      </div>
    </>
  );
}
