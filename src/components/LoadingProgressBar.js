import styled, { keyframes } from "styled-components";
import "../styles/LoadingProgressBar.css";

let LoadingProgressBar = function (props) {
  const animation = keyframes`
  0% {
    left:0%;
    right:100%;
    width:0%;
  }
  10% {
    left:0%;
    right:75%;
    width:25%;
  }
  90% {
    right:0%;
    left:75%;
    width:25%;
  }
  100% {
    left:100%;
    right:0%;
    width:0%;
  }
}
    `;
  const Div = styled.div`
    animation: ${animation} 2.5s linear infinite;
  `;
  return (
    <div>
      {props.type}
      <div className="loader">
        <Div className="loaderBar"></Div>
        <p>{props.percentage}...</p>
      </div>
    </div>
  );
};

export default LoadingProgressBar;
