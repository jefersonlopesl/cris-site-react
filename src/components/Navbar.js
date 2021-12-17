import React, {useState} from 'react';
import {link} from 'react-route-dom';

function Navbar() {
return(
  <>
    <nav className="navbar">
    <div className="navbar-container">
    <link to="/" className="navbar-logo">
    TVRL <i className="fab fa-typo3"></i>
    </link>
    </div>
    </nav>
    </>
)

}

export default Navbar
