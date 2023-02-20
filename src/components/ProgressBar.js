import React from "react";
import "./ProgressBar.css";
import { keyframes } from "styled-components";

let ProgressBar = function (props) {
  return (
    <div>
      {props.type}
      <div className="progress">
        <div className="progress-value CSS">
          <p>{props.percentage}%</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
