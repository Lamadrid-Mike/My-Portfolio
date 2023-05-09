import React from "react";
import "../styles/Home.css";
import NavBar from "../components/NavBar";
import Information from "../components/Information";
import BasicTabs from "../components/BasicTabs";

class Home extends React.Component {
  render() {
    return (
      <div className="main-page">
        <NavBar />
        <Information />
        <BasicTabs />
      </div>
    );
  }
}

export default Home;
