import React from "react";
import NavBar from "./components/NavBar";
import BasicTabs from "./components/BasicTabs";
import MainSlider from "./components/MainSlider";

class Home extends React.Component {
  render() {
    return (
      <div className="main-page">
        <NavBar />
        <MainSlider />
        <BasicTabs />
      </div>
    );
  }
}

export default Home;
