import React, { Component } from "react";
//import the components we will need
import OwnerCard from "./OwnerCard";
import OwnerManager from "../../modules/OwnerManager";

// class is an object
class OwnerList extends Component {
  //define what this component needs to render
  state = {
    owners: []
  };

  componentDidMount() {
    console.log("OWNER LIST: ComponentDidMount");
    //getAll from EmployeeManager and hang on to that data; put it in state
    OwnerManager.getAll().then(ownersArray => {
      // Always update state with .setState, takes an object
      this.setState({
        owners: ownersArray
      });
    });
  }

  deleteOwner = id => {
    OwnerManager.delete(id)
    .then(() => {
      OwnerManager.getAll()
      .then((newOwners) => {
        this.setState({
            owners: newOwners
        })
      })
    })
  }

  // Function definition
  render(){
    console.log("OwnerList: Render");
  
    return(
      <div className="container-cards">
        {this.state.owners.map(owner =>
          <OwnerCard
            key={owner.id}
            owner={owner}
            deleteOwner={this.deleteOwner}
          />
        )}
      </div>
    )
  }
}

export default OwnerList;
