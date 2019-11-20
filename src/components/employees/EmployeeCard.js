import React, { Component } from 'react';
import "../Kennel.css"
import "./Employee.css";

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
          <div className="card-content">
            <h2>Name: <span className="card-employeename">{this.props.employee.name}</span></h2>
            <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Obliviate</button>
          </div>
      </div>
    );
  }
}

export default EmployeeCard