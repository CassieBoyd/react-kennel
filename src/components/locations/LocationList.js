import React, { Component } from "react";
//import the components we will need
import LocationCard from "./LocationCard";
import LocationManager from "../../modules/LocationManager";

// class is an object
class LocationList extends Component {
  //define what this component needs to render
  state = {
    locations: []
  };

  componentDidMount() {
    console.log("ANIMAL LIST: ComponentDidMount");
    //getAll from EmployeeManager and hang on to that data; put it in state
    LocationManager.getAll().then(locationsArray => {
      // Always update state with .setState, takes an object
      this.setState({
        locations: locationsArray
      });
    });
  }

  // Function definition
  render() {
    console.log("LOCATION LIST: Render");
console.log("state", this.state)
    // For each item render EmployeeCard
    return (
      <div className="container-cards">
        {/* {} for vanilla JS within JSX */}
        {/* (employee => is item being looped through. EmployeeCard is a function, return object */}
        {this.state.locations.map(location => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    );
  }
}

export default LocationList;
