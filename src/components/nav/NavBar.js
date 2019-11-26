import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  render(){

    return (
      <header>
        <h1 className="site-title">Fairytail Kennels<br />
          <small>Our magical menagerie is the place for ye.</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            {(this.props.user) ? <li><Link className="nav-link" to="/animals">Animals</Link></li> : null }
            <li><Link className="nav-link" to="/locations">Locations</Link></li>
            {(this.props.user) ? <li><Link className="nav-link" to="/employees">Employees</Link></li> : null }
            {(this.props.user) ? <li><Link className="nav-link" to="/owners">Owners</Link></li> : null }
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar;