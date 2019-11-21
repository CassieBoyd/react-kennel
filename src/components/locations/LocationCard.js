import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    console.log(this.props.location)
    return (
      <div className="card">
          <div className="card-content">
            <h2>Location: <span className="card-locationname">{this.props.location.name}</span></h2>
            <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close</button>

          </div>
      </div>
    );
  }
}

export default LocationCard