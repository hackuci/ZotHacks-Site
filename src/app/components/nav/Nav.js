import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

import logo from 'assets/images/zothacks-logo.png';
import { Button } from 'react-bootstrap';

function Nav() {
  return (
    <div className="nav">
      <div className="nav-left">
        <Link to="/">
          <img src={logo} alt="Zothacks Logo"></img>
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/">
          <p className="home-button-hide">
            Home
          </p>
        </Link>
        <Link to="/schedule">
          <Button variant="outline-light">
            Schedule
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Nav;