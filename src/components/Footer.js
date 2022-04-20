import React from "react";

export default function () {
  let mystyle = {
    padding: "10px",
    color: "yellow",
  };
  // it can also be given by text-light in the div section
  return (
    <div className="bg-dark  text-center" style={mystyle}>
      Footer works
    </div>
  );
}
