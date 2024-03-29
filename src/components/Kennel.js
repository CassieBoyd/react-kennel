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
  // Checks if user is logged in
  state = {
    user: false
  };

  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null;

  setUser = authObj => {
    /*
      For now, just store the email and password that
      the customer enters into local storage.
    */
    localStorage.setItem("credentials", JSON.stringify(authObj));
    this.setState({
      user: this.isAuthenticated()
    });
  };

  clearUser = () => {
    // localStorage.clear()
    localStorage.removeItem("credentials")
    this.setState({user: this.isAuthenticated()})
  }

  componentDidMount() {
    this.setState({
      user: this.isAuthenticated()
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar user={this.state.user} clearUser={this.clearUser} />
        <ApplicationViews user={this.state.user} setUser={this.setUser} />
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
