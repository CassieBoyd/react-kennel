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

  deleteEmployee = id => {
    EmployeeManager.delete(id)
    .then(() => {
      EmployeeManager.getAll()
    //   setState after delete
      .then((newEmployees) => {
        this.setState({
            employees: newEmployees
        })
      })
    })
  }

  // Function definition
  render(){
    console.log("EmployeeList: Render");
  console.log(this.state.employees)
    return(
      <div className="container-cards">
        {this.state.employees.map(employee =>
          <EmployeeCard
            key={employee.id}
            employee={employee}
            deleteEmployee={this.deleteEmployee}
          />
        )}
      </div>
    )
  }
}

export default EmployeeList;
