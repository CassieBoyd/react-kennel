import React, { Component } from "react";
import "./Kennel.css";
// import AnimalCard from "./animal/AnimalCard";
// import OwnerCard from "./owners/OwnerCard";
// import LocationCard from "./locations/LocationCard";
// import EmployeeCard from "./employees/EmployeeCard";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";

// Kennel is an object
class Kennel extends Component {
  // render() is a method on the Kennel object that returns an HTML representation of some (hard-coded) data.
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    );
  }
}

export default Kennel;
