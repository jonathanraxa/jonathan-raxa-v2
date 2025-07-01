import React from "react";
import { PortfolioHeading } from "./PortfolioHeading";
import { IMAGES } from "../../Assets/Assets";
import "../../../sass/Portfolio.scss";

import {
  PROJECT_VIDEDU,
  PROJECT_4UIMG,
  PROJECT_PHOTOWORLD,
  PROJECT_SFPARK,
  PROJECT_RUBYSCRIPT,
  PROJECT_PERSONALWEBSITE,
  PROJECT_GOOGLESCRIPT,
  PROJECT_RENTALS,
  PROJECT_TEMPLATE_CREATOR,
  PROJECT_PROMODRAWER,
} from "../Portfolio/Projects";

const react = (
  <a href={`#`} target="_blank" rel="noopener noreferrer">
    <i className="fab fa-react fa-4x" style={{ color: "#000" }}></i>
  </a>
);
const javascript = (
  <a href={`#`} target="_blank" rel="noopener noreferrer">
    <i className="fab fa-js fa-4x" style={{ color: "#000" }}></i>
  </a>
);
const css = (
  <a href={`#`} target="_blank" rel="noopener noreferrer">
    <i className="fab fa-css3 fa-4x" style={{ color: "#000" }}></i>
  </a>
);
const html = (
  <a href={`#`} target="_blank" rel="noopener noreferrer">
    <i className="fab fa-html5 fa-4x" style={{ color: "#000" }}></i>
  </a>
);

const gapincImg = (
  <div className="company-logo">
    <img src={IMAGES.gapinc} alt="" className="img-responsive fullWidth" />
  </div>
);

const lqdigitalImg = (
  <div className="company-logo">
    <img src={IMAGES.lqdigital} alt="" className="img-responsive fullWidth" />
  </div>
);

const sfsuImg = (
  <div className="company-logo">
    <img src={IMAGES.sfsu} alt="" className="img-responsive fullWidth" />
  </div>
);

const personalImg = (
  <div className="company-logo">
    <img
      src={IMAGES.personal_logo}
      alt=""
      className="img-responsive fullWidth"
    />
  </div>
);

const gapinc_projects = (
  <div className="project-container">
    {PROJECT_TEMPLATE_CREATOR}
    {PROJECT_PROMODRAWER}
  </div>
);

const lqdigital_projects = (
  <div className="project-container">{PROJECT_RUBYSCRIPT}</div>
);

const sfsu_projects = (
  <div className="project-container">
    {PROJECT_VIDEDU}
    {PROJECT_4UIMG}
    {PROJECT_PHOTOWORLD}
    {PROJECT_SFPARK}
    {PROJECT_GOOGLESCRIPT}
  </div>
);
const personal_projects = (
  <div className="project-container">
    {PROJECT_PERSONALWEBSITE}
    {PROJECT_RENTALS}
  </div>
);

class PortfolioContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gapinc: false,
      lqdigital: false,
      sfsu: false,
      personal: false,
    };
  }

  showProjects = (id) => {
    switch (id) {
      case "gapinc":
        this.setState({
          gapinc: true,
          lqdigital: false,
          sfsu: false,
          personal: false,
        });
        break;

      case "lqdigital":
        this.setState({
          gapinc: false,
          lqdigital: true,
          sfsu: false,
          personal: false,
        });
        break;

      case "sfsu":
        this.setState({
          gapinc: false,
          lqdigital: false,
          sfsu: true,
          personal: false,
        });
        break;

      case "personal":
        this.setState({
          gapinc: false,
          lqdigital: false,
          sfsu: false,
          personal: true,
        });
        break;

      default:
        this.setState({
          gapinc: false,
          lqdigital: false,
          sfsu: false,
          personal: false,
        });
        break;
    }
  };

  render() {
    return (
      <div className="portfolio">
        <PortfolioHeading />
        <div className="portfolio--icons">
          <div
            onMouseEnter={() => this.showProjects("gapinc")}
            className="col-md-3 text-center gapinc"
          >
            {gapincImg}
          </div>
          <div
            onMouseEnter={() => this.showProjects("lqdigital")}
            className="col-md-3 text-center lqdigital"
          >
            {lqdigitalImg}
          </div>
          <div
            onMouseEnter={() => this.showProjects("sfsu")}
            className="col-md-3 text-center sfsu"
          >
            {sfsuImg}
          </div>
          <div
            onMouseEnter={() => this.showProjects("personal")}
            className="col-md-3 text-center personal"
          >
            {personalImg}
          </div>
        </div>

        {this.state.gapinc ? (
          <div className={`${this.state.gapinc ? "animate-me" : ""}`}>
            {gapinc_projects}
          </div>
        ) : (
          ""
        )}
        {this.state.lqdigital ? (
          <div className={`${this.state.lqdigital ? "animate-me" : ""}`}>
            {lqdigital_projects}
          </div>
        ) : (
          ""
        )}
        {this.state.sfsu ? (
          <div className={`${this.state.sfsu ? "animate-me" : ""}`}>
            {sfsu_projects}
          </div>
        ) : (
          ""
        )}
        {this.state.personal ? (
          <div className={`${this.state.personal ? "animate-me" : ""}`}>
            {personal_projects}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default PortfolioContainer;
