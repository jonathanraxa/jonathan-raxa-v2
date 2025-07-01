import React, { Component } from "react";
import { Link as RouteLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import "../../sass/Evergreen.scss";
import "../../containers/App.css";

export default class NavBarResume extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  // scrolls to the top of the page when mounted
  componentDidMount() {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <nav className="NavBarResume sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
        <RouteLink to={{ pathname: "/jonathan-raxa" }} className="navbar-brand">
          Jonathan Raxa
        </RouteLink>

        <button
          className="navbar-toggler"
          onClick={this.handleClick}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={
            this.state.isToggleOn
              ? "collapse navbar-collapse show"
              : "collapse navbar-collapse"
          }
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ml-auto justify-content-end">
            <RouteLink
              to={{ pathname: "/jonathan-raxa" }}
              onClick={(event) => {
                this.handleClick();
                this.scrollToTop();
              }}
              className="nav-item nav-link capitalizeLi"
            >
              home
            </RouteLink>

            <ScrollLink
              to="experience"
              onClick={this.handleClick}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
              className="nav-item nav-link capitalizeLi"
            >
              experience
            </ScrollLink>
            <ScrollLink
              to="projects"
              onClick={this.handleClick}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
              className="nav-item nav-link capitalizeLi"
            >
              projects
            </ScrollLink>
            <ScrollLink
              to="education"
              onClick={this.handleClick}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
              className="nav-item nav-link capitalizeLi"
            >
              education
            </ScrollLink>
            <ScrollLink
              to="personal"
              onClick={this.handleClick}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
              className="nav-item nav-link capitalizeLi"
            >
              personal
            </ScrollLink>
            <ScrollLink
              to="contact"
              onClick={this.handleClick}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
              className="nav-item nav-link capitalizeLi"
            >
              contact
            </ScrollLink>
          </div>
        </div>
        <p id="back-top">
          <ScrollLink to="page-top" smooth={true} duration={10}>
            <i className="fa fa-angle-up"></i>
          </ScrollLink>
        </p>
      </nav>
    );
  }
}
