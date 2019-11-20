import React, { Component } from 'react';
import "./Employee.css";

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
          <div className="card-content">
            <h2>Name: <span className="card-employeename">{this.props.employee.name}</span></h2>
            {/* <p>Breed: {this.props.a.breed}</p> */}
          </div>
      </div>
    );
  }
}

export default EmployeeCard