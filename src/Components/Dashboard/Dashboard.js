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
        // backgroundColor: ["rgba(255, 94, 0, 0.45)"],
      },
    ],
  });

  const style = {
    dashboard: {
      // padding: "1%",
      // boxSizing: "borderBox",
      // border: ("1px", "solid", "white"),
      // borderRadius: "10px",
      // boxShadow: ("0px", "0px", "10px", "gray"),
      // margin: "1%",
      display: "flex",
      flexDirection: "column",
    },
  };

  return (
    <>
      <div style={style.dashboard}>
        <div className="dashboard">
          <div className="goals">
            <Goals />
          </div>
          <div className="barchart">
            <div style={{ width: 700 }}>
              <BarChart chartData={rateData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
