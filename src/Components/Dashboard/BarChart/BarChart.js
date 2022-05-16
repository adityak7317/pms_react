import React from "react";
import { Bar } from "react-chartjs-2";
import "./BarChart.css";
import { Chart as ChartJS } from "chart.js/auto";
function BarChart({ chartData }) {
  const style = {
    bar: {
      // boxSizing: "border-box",
      margin: "0%",
      height: "540px",
      width: "1000px",
      marginTop: "35px",
      marginLeft: "220px",
      // justifyContent:"center"
      // display: "flex",
      // flexDirection: "column",
    },
    avg: {
      // margin: "3%",
      // justifyItems: "center",
      marginLeft: "15px",
      fontFamily: "sans-serif",
      color: "rgba(97, 97, 97, 1)",
    },
  };
  return (
    <>
      <div style={style.bar} className="bar">
        <Bar data={chartData} />
        <div className="average" style={style.avg}>
          <span>Average Rating : 6.4</span>
        </div>
      </div>
    </>
  );
}
export default BarChart;
