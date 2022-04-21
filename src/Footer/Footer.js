import React from "react";
import "./Footer.css";

export default function () {
  let mystyle = {
    padding: "10px",
    color: "yellow",
  };
  // it can also be given by text-light in the div section
  return (
    <div className="bg-dark  text-center footer" style={mystyle}>
      Footer works
    </div>
  );
}
