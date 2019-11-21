import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

class LocationDetail extends Component {

  state = {
      address: "",
      phoneNumber: "",
  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(this.props.locationId)
    .then((location) => {
      this.setState({
        address: location.address
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.address}</span></h3>
            <p>Breed: {this.state.breed}</p>
        </div>
      </div>
    );
  }
}

export default AnimalDetail;