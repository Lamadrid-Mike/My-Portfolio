import React from "react";
import NavBar from "./components/NavBar";
import Information from "./components/Information";
import BasicTabs from "./components/BasicTabs";
import MainSlider from "./components/MainSlider";

class Home extends React.Component {
  render() {
    return (
      <div className="main-page">
        <NavBar />
        {/* <Information /> */}
        <MainSlider />
        <BasicTabs />
      </div>
    );
  }
}

export default Home;
