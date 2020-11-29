import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <Link to="/">
          <h1 id="logo" className="navbar-logo" href="/">
            SANID
          </h1>
        </Link>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <NavLink
                exact
                to={item.url}
                activeClassName={item.activeName}
                key={index}
              >
                <li key={index}>
                  <a key={index} href={item.url} className={item.cName}>
                    {item.title}
                  </a>
                </li>
              </NavLink>
            );
          })}
        </ul>
        <Button>Contáctanos</Button>
      </nav>
    );
  }
}

export default Navbar;
