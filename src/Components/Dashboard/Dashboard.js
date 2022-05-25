import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import BarChart from "./BarChart/BarChart";
// import { RateData } from "./BarChart/RateData";
import "./Dashboard.css";
// import Goals from "./D-Goals/D-Goals";
import Axios from "axios";
// import { dividerClasses } from "@mui/material";

import GoalsChart from "./GoalsChart/GoalsChart";

export default function Dashboard() {
  return (
    <div>
      <GoalsChart />
    </div>
  );
}
