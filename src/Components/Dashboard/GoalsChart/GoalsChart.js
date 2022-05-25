import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "left",
    },
    title: {
      display: true,
      text: "chart bar chart",
    },
  },
};

const labels = [];
//
const GoalsChart = () => {
  const [data, setData] = useState({
    labels,
    datasets: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:3001/api/get";
      const labelSet = [];
      const dataSet = [];
      await fetch(url)
        .then((data) => {
          console.log("api data", data);
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log("resssss", res);
          for (const val of res) {
            dataSet.push(val.rating);
            labelSet.push(val.action_date);
          }
          setData({
            labels: labelSet,
            datasets: [
              {
                label: "Rating",
                data: dataSet,
                // borderColor: "rgb(255, 99, 132)",
                // backgorundColor: "rgba(255, 99, 132, 0.5)",
              },
            ],
          });
          console.log("arrData", dataSet);
        })
        .catch((e) => {
          console.log("error", e);
        });
    };
    fetchData();
  }, []);

  return (
    <div style={{ width: "80%", height: "50%" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default GoalsChart;
