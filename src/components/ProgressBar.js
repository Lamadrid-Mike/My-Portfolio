import React from "react";
import "./ProgressBar.css";
import styled, { keyframes } from "styled-components";

let ProgressBar = function (props) {
  const animation = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: ${props.percentage}%;
  }
`;

  const Div = styled.div`
    animation: ${animation} 4s normal forwards;
  `;

  return (
    <div>
      {props.type}
      <div className="progress">
        <Div className="progress-value">
          <p>{props.percentage}%</p>
        </Div>
      </div>
    </div>
  );
};

export default ProgressBar;
