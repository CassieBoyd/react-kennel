import React, { Component } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationForm.css";

class LocationForm extends Component {
  state = {
    locationName: "",
    address: "",
    phoneNumber: "",
    loadingStatus: false
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create location      object, invoke the LocationManager post method, and redirect to the full location list
   */
  constructNewLocation = evt => {
    evt.preventDefault();
    if (
      this.state.locationName === "" ||
      this.state.address === ""
    ) {
      window.alert("Please input a location name, phone and address");
    } else {
      this.setState({ loadingStatus: true });
      const location = {
        name: this.state.locationName,
        phoneNumber: this.state.phoneNumber,
        address: this.state.address
      };

      // Create the location and redirect user to location list
      LocationManager.post(location).then(() =>
        this.props.history.push("/locations")
      );
    }
  };

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="locationName"
                placeholder="Location name"
              />
              <label htmlFor="locationName">Name</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="phoneNumber"
                placeholder="Phone Number"
              />
              <label htmlFor="phoneNumber">Phone</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="address"
                placeholder="Address"
              />
              <label htmlFor="address">Address</label>
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewLocation}>
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default LocationForm;
