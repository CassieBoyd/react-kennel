// https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/36796281#36796281

// Import React library and React.Component as "Component" from react in node modules
import React, { Component } from "react";
// Import Link object from react-router-dom in node modules
import { Link } from "react-router-dom";
// Import css styling
import "./Animal.css";

// Component AnimalCard is defined as a class and extends the Component subclass
class AnimalCard extends Component {
  // render method is required when using a class component
  render() {
    return (
      // Each card is wrapped in a div
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require("./dog.svg")} alt="My Dog" />
          </picture>
          {/*  */}
          <h2>
            Name: <span className="card-petname">{this.props.animal.name}</span>
          </h2>
          <p>Breed: {this.props.animal.breed}</p>
          <button
            type="button"
            onClick={() => {
              this.props.history.push(`/animals/${this.props.animal.id}/edit`);
            }}
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => this.props.deleteAnimal(this.props.animal.id)}
          >
            Discharge
          </button>

          {/* Details button */}
          <Link to={`/animals/${this.props.animal.id}`}>
            <button>Details</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default AnimalCard;
