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
      flexDirection: "row",
      justifyContent: "space-around",
    },
    DGoals: {
      // margin: "3% 1%",
      padding: "2% 0%",
      margin: "2%",
    },
    bar: {
      // margin: "-10%",
      // padding: "1%",
      // marginLeft: "50px",
      // backgroundColor: "blue",
    },
  };

  return (
    <>
      <div style={style.dashboard} className="dashboard">
        <div style={style.DGoals} className="d-goals">
          <Goals />
        </div>
        <div style={style.bar} className="barchart">
          <div>
            <BarChart chartData={rateData} />
          </div>
        </div>
      </div>
    </>
  );
}

// <div className="dashboard">
//           <div className="goals">
//
//           </div>
//           <div className="barchart">

//           </div>
//         </div>
