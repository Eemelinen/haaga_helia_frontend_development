import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Navigator() {
  return (
    <div className="navigator">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="About">About</a>
            </li>
          </ul>
        </div>

    </nav>

    </div>
  );
}

export default Navigator;