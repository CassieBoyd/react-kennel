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
import EmployeeWithAnimals from "./employees/EmployeeWithAnimals";
import OwnerForm from "./owners/OwnerForm";
import LocationForm from "./locations/LocationForm";
import EmployeeEditForm from "./employees/EmployeeEditForm"
class ApplicationViews extends Component {
  // Check if credentials are in local storage
  //returns true/false boolean
  // isAuthenticated = () => localStorage.getItem("credentials") !== null;

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
        {/* *****************ANIMAL ROUTES******************** */}
        <Route
          exact
          path="/animals"
          render={props => {
            if (this.props.user) {
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
        {/* *****************LOCATION ROUTES*********************** */}
        <Route
          exact
          path="/locations"
          render={props => {
              return <LocationList {...props} />;
          }}
        />

        <Route
          path="/locations/new"
          render={props => {
            return <LocationForm {...props} />;
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

        {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}

        {/* **********************OWNER ROUTES************************* */}
        {/* include the ...props argument and pass it to the child component via return. This sets up the ability to use the history.push() mechanism in the components themselves to change the URL in the browser. */}
        <Route
          exact
          path="/owners"
          // Renders OwnerList with props passed down from react-router-dom
          render={props => {
            if (this.props.user) {
              return <OwnerList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />

        <Route
          path="/owners/new"
          render={props => {
            return <OwnerForm {...props} />;
          }}
        />

        {/* *********************EMPLOYEE ROUTES************************ */}
        <Route
          exact
          path="/employees"
          render={props => {
            if (this.props.user) {
              return <EmployeeList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />

        <Route
          path="/employees/new"
          render={props => {
            return <EmployeeForm {...props} />;
          }}
        />
        <Route
          exact path="/employees/:employeeId(\d+)/details"
          render={props => {
            return <EmployeeWithAnimals {...props} />;
          }}
        />

        <Route path="/login" render={(props) => {
          return <Login setUser= {this.props.setUser} {...props} />
        }} />

<Route
  path="/employees/:employeeId(\d+)/edit" render={props => {
    return <EmployeeEditForm {...props} />
  }}
/>
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
