import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

import logo from 'assets/images/zothacks-logo.png';
import { Button } from 'react-bootstrap';

function Nav() {
  return (
    <div className="nav">
      <div className="nav-left">
        <a href="https://zothacks.com/">
          <img src={logo} alt="Zothacks Logo"></img>
        </a>
      </div>
      <div className="nav-right">
        <a href="https://zothacks.com/">
          <p className="home-button-hide">
            Home
          </p>
        </a>
        {/* <Link to="/schedule">
          <Button variant="outline-light">
            Schedule
          </Button>
        </Link> */}
      </div>
    </div>
  )
}

export default Nav;