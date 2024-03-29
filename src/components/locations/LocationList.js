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
    console.log("LOCATION LIST: ComponentDidMount");
    //getAll from EmployeeManager and hang on to that data; put it in state
    LocationManager.getAll().then(locationsArray => {
      // Always update state with .setState, takes an object
      this.setState({
        locations: locationsArray
      });
    });
  }

  deleteLocation = id => {
    LocationManager.delete(id).then(() => {
      LocationManager.getAll().then(newLocations => {
        this.setState({
          locations: newLocations
        });
      });
    });
  };

  // Function definition
  render() {
    console.log("LocationList: Render");

    return (
      <React.Fragment>
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/locations/new");
            }}>
            Add Location
          </button>
        </section>

        <div className="container-cards">
          {this.state.locations.map(location => (
            <LocationCard
              key={location.id}
              location={location}
              deleteLocation={this.deleteLocation}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default LocationList;
