import React from "react";
import Collapsible from "react-collapsible";
import { Button, Modal } from "react-bootstrap";
import "../../../sass/Portfolio.scss";

class Portfolio2 extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = { show: false };
  }
  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const date = this.props.date;
    const title = this.props.title;
    const location = this.props.location;
    const extra_resource = this.props.extra_resource;
    const extra_resource_TF = this.props.extra_resource_TF;
    const description = this.props.description;
    const website_title = this.props.website_title;
    const website_link = this.props.website_link;
    const source_code_title = this.props.source_code_title;
    const source_code_link = this.props.source_code_link;
    const documentation_title = this.props.documentation_title;
    const documentation_link = this.props.documentation_link;
    const contribution = this.props.contribution;
    const languages = this.props.languages;
    const image = this.props.image;

    const portfolio_title = <h2>{title}</h2>;

    return (
      <>
        {/* <div className="col-md-6 col-0-gutter">
          <div className="ot-portfolio-item">
            <figure className="effect-bubba">
              <img
                src={image}
                alt={title}
                className="img-responsive fullWidth"
              />
              <figcaption>
                <h2>{title}</h2>
                <p>{description}</p>
                <a href="javascript:void(0);" onClick={this.handleShow}>
                  View more
                </a>
              </figcaption>
            </figure>
          </div>
        </div> */}

        <Collapsible trigger={portfolio_title}>
          <div>
            {/* <img src={image} alt={title} className="img-responsive fullWidth" /> */}
            <h2>{title}</h2>
            <p>{description}</p>
            <a onClick={this.handleShow}>View more</a>
          </div>
        </Collapsible>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="modalTitle">{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {extra_resource_TF ? (
              <div className="embed-container">
                <iframe
                  src={extra_resource}
                  frameBorder="0"
                  webkitAllowFullScreen
                  mozallowfullscreen
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <img
                src={image}
                alt={title}
                className="img-responsive fullWidth"
              />
            )}

            <div className="modal-works">
              {languages.map((language) => (
                <span className="modalLang">{language}</span>
              ))}
            </div>
            <div className="dateLocationModal">
              {date}&nbsp;|&nbsp;{location}
            </div>
            <div className="mar04em">
              <span className="colorRed">Website:</span>
              <span>
                &nbsp;<a href={website_link}>{website_title}</a>
              </span>
            </div>
            <div className="mar04em">
              <span className="colorRed">Description:</span>
              <span>&nbsp;{description}</span>
            </div>
            <div className="mar04em">
              <span className="colorRed">Source Code:</span>
              <span>
                &nbsp;<a href={source_code_link}>{source_code_title}</a>
              </span>
            </div>
            <div className="mar04em">
              <span className="colorRed">Documentation:</span>
              <span>
                &nbsp;<a href={documentation_link}>{documentation_title}</a>
              </span>
            </div>
            <div className="mar04em">
              <span className="colorRed">Contribution:</span>
              <span>&nbsp;{contribution}</span>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={this.handleClose}
              type="button"
              className="btn btn-default"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Portfolio2;
