import React, { Component } from "react";
//import the components we will need
import EmployeeCard from "./EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager";

// class is an object
class EmployeeList extends Component {
  //define what this component needs to render
  state = {
    employees: []
  };

  componentDidMount() {
    console.log("ANIMAL LIST: ComponentDidMount");
    //getAll from EmployeeManager and hang on to that data; put it in state
    EmployeeManager.getAll().then(employeesArray => {
      // Always update state with .setState, takes an object
      this.setState({
        employees: employeesArray
      });
    });
  }

  // Function definition
  render() {
    console.log("EMPLOYEE LIST: Render");

    // For each item render EmployeeCard
    return (
      <div className="container-cards">
        {/* {} for vanilla JS within JSX */}
        {/* (employee => is item being looped through. EmployeeCard is a function, return object */}
        {this.state.employees.map(employee => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    );
  }
}

export default EmployeeList;