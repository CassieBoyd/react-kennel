import React, { Component } from 'react';
import "./Owner.css";

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
          <div className="card-content">
            <h2>Name: <span className="card-ownername">{this.props.owner.name}</span></h2>
          </div>
      </div>
    );
  }
}

export default OwnerCard