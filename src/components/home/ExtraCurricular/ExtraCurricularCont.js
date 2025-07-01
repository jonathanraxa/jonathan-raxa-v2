import React, { Component } from "react";
import IntroIntell from "./IntroIntell";
import Podcast from "./Podcast";
import Toastbusters from "./Toastbusters";
import IntroIntellDescription from "./descriptions/IntroIntellDescription";
import PodcastDescription from "./descriptions/PodcastDescription";

class ExtraCurricularCont extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panel_1: false,
      panel_2: false,
      panel_3: false,
    };
  }

  showPersonal = (id) => {
    switch (id) {
      case "panel_1":
        this.setState({
          panel_1: true,
          panel_2: false,
          panel_3: false,
        });
        break;

      case "panel_2":
        this.setState({
          panel_1: false,
          panel_2: true,
          panel_3: false,
        });
        break;

      case "panel_3":
        this.setState({
          panel_1: false,
          panel_2: false,
          panel_3: true,
        });
        break;

      default:
        this.setState({
          panel_1: false,
          panel_2: false,
          panel_3: false,
        });
        break;
    }
  };
  render() {
    return (
      <div className="extracurricular">
        <div className="extracurricular-icons">
          <div onMouseEnter={() => this.showPersonal("panel_1")}>
            <IntroIntell />
          </div>
        </div>
        <div className="extracurricular-description">
          <IntroIntellDescription />
        </div>
      </div>
    );
  }
}
export default ExtraCurricularCont;
