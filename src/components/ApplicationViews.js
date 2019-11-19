import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
//only include these once they are built - previous practice exercise
import LocationCard from './locations/LocationCard'
import EmployeeList from './employees/EmployeeList'
import OwnerCard from './owners/OwnerCard'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerCard />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList />
        }} />
        <Route path="/locations" render={(props) => {
          return <LocationCard />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews