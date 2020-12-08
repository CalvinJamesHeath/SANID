import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import img from "./sanid.jpeg";

class Navbar extends Component {
  state = { clicked: false };

  closeMenu = () => {
    if (this.state.clicked) {
      this.handleClick();
    }
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <Link to="/">
          <div className="flex" href="/" onClick={this.closeMenu}>
            <img className="logo-img" src={img} alt="" />
            <h1 id="logo" className="navbar-logo" href="/">
              SANID
            </h1>
          </div>
        </Link>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul
          className={this.state.clicked ? "nav-menu active" : "nav-menu"}
          onClick={this.handleClick}
        >
          {MenuItems.map((item, index) => {
            return (
              <NavLink
                exact={item.exact}
                to={item.url}
                activeClassName={item.activeName}
                key={index}
              >
                <li key={index}>
                  <div key={index} className={item.cName} href={item.url}>
                    {item.title}
                  </div>
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
