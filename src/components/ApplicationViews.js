import { Route, withRouter, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
//only include these once they are built - previous practice exercise
import LocationList from "./locations/LocationList";
import EmployeeList from "./employees/EmployeeList";
import OwnerList from "./owners/OwnerList";
import Login from "./auth/Login";
import AnimalForm from "./animal/AnimalForm";
import AnimalEditForm from "./animal/AnimalEditForm";
import LocationDetail from "./locations/LocationDetail";
import EmployeeForm from "./employees/EmployeeForm";

class ApplicationViews extends Component {
  // Check if credentials are in local storage
  //returns true/false boolean
  isAuthenticated = () => localStorage.getItem("credentials") !== null;

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <Home />;
          }}
        />
        {/* Make sure you add the `exact` attribute here */}
        <Route
          exact
          path="/animals"
          render={props => {
            if (this.isAuthenticated()) {
              return <AnimalList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />

        {/* When route matches this path, execute a function */}
        <Route
          exact
          path="/animals/:animalId(\d+)"
          render={props => {
            // Pass the animalId to the AnimalDetailComponent as props
            return (
              <AnimalDetail
                animalId={parseInt(props.match.params.animalId)}
                {...props}
              />
            );
          }}
        />

        <Route
          path="/animals/:animalId(\d+)/edit"
          render={props => {
            return <AnimalEditForm {...props} />;
          }}
        />

        <Route
          path="/animals/new"
          render={props => {
            return <AnimalForm {...props} />;
          }}
        />

        <Route
          exact
          path="/locations"
          render={props => {
            return <LocationList />;
          }}
        />
        <Route
          path="/locations/:locationId(\d+)"
          render={props => {
            // Pass the locationId to the LocationDetailComponent
            return (
              <LocationDetail
                locationId={parseInt(props.match.params.locationId)}
              />
            );
          }}
        />

        <Route path="/login" component={Login} />
        {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
        <Route
          path="/owners"
          render={props => {
            return <OwnerList />;
          }}
        />

        {/* *********************EMPLOYEE ROUTES************************ */}
        <Route
          exact
          path="/employees"
          render={props => {
            return <EmployeeList {...props} />;
          }}
        />

        <Route
          path="/employees/new"
          render={props => {
            return <EmployeeForm {...props} />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
