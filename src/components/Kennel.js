import React, { Component } from 'react'
import './Kennel.css'
import AnimalCard from './animal/AnimalCard'
import OwnerCard from './owners/OwnerCard';
import LocationCard from './locations/LocationCard';
import EmployeeCard from './employees/EmployeeCard';
import NavBar from './nav/NavBar';


// Kennel is an object
class Kennel extends Component {
    // render() is a method on the Kennel object that returns an HTML representation of some (hard-coded) data.
    render() {
        return (
            <div>
                <NavBar />
                <h2>Student Kennels<br />
                    <small>Loving care when you're not there.</small>
                </h2>
                <address>
                    Visit Us at the Nashville North Location
                    <br />500 Puppy Way
                </address>
                <div>
                    <AnimalCard />
                    <OwnerCard />
                    <LocationCard />
                    <EmployeeCard />
                    <AnimalCard />
                    <AnimalCard />
                </div>
            </div>
        );
    }
}

export default Kennel