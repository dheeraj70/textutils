import React from 'react'

import Proptypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar({title,first="Home",second="About",mode,darktogg}) {


  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{title.name + title.lname}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{first}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{second}</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href ="/">Disabled</a>
        </li>
      </ul>
      {//<form className="d-flex" role="search">
        //<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        //<button className="btn btn-outline-success" type="submit">Search</button>
      //</form>
      }
      <div class="form-check form-switch textct">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={darktogg}/>
  <label class="form-check-label" for="flexSwitchCheckDefault" style={{color:(mode==="light"?"black":"white")}}>Dark mode</label>
</div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes ={
    title: Proptypes.object.isRequired,
    mode: Proptypes.string,
    first: Proptypes.string,
    second: Proptypes.string
}
