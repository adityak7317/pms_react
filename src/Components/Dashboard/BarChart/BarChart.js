import React from "react";
import { Bar } from "react-chartjs-2";
import "./BarChart.css";
import { Chart as ChartJS } from "chart.js/auto";
function BarChart({ chartData }) {
  const style = {
    bar: {
      // boxSizing: "border-box",
      // margin: "0%",
      // height: "300px",
      width: "850px",
      // paddingTop: "35px",
      // marginLeft: "0%",
      // justifyContent:"center"
      // display: "flex",
      // flexDirection: "column",
      // backgroundColor: "pink",
    },
    avg: {
      // margin: "3%",
      justifyItems: "center",
      // marginLeft: "%",
      fontFamily: "sans-serif",
      color: "rgba(97, 97, 97, 1)",
      padding: "3px",
    },
  };
  return (
    <>
      <div style={style.bar} className="bar">
        <Bar data={chartData} />
        <div style={style.avg} className="average">
          <span>Average Rating : 6.4</span>
        </div>
      </div>
    </>
  );
}
export default BarChart;
