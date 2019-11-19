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

// index.js is invoked first and it renders the <Router> with Kennel.js
// Kennel.js renders the <NavBar> and <ApplicationViews>
// <NavBar> contains links to other views
// <ApplicationViews> renders routes based on the URL.
// When viewing the Animals section, AnimalCard.js will load up and invoke render().
// Our page displays.

export default Kennel;
