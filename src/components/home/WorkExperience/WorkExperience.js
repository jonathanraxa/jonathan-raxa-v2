import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { EXPERIENCE } from "./experience";
import { Gutter } from "./Gutter";
import "./WorkExperience.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrev = ({ onClick }) => (
  <button className="slick-arrow custom-prev" onClick={onClick}>
    <FaChevronLeft />
  </button>
);

const CustomNext = ({ onClick }) => (
  <button className="slick-arrow custom-next" onClick={onClick}>
    <FaChevronRight />
  </button>
);

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true,
  prevArrow: <CustomPrev />,
  nextArrow: <CustomNext />,
  responsive: [
    {
      breakpoint: 980,
      settings: {
        arrows: false,
      },
    },
  ],
};

export const WorkExperience = () => {
  return (
    <div className="experience row custom-row-width" id="experience">
      <div className="mz-module work-experience-container light-bg">
        <div className="col-lg-12 text-center">
          <div className="section-title">
            <h2 style={{ textTransform: "uppercase" }}>work experience</h2>
            <p style={{ textTransform: "uppercase" }}>
              <i>
                gap inc.&nbsp;&nbsp;|&nbsp;&nbsp;l.q.
                digital&nbsp;&nbsp;|&nbsp;&nbsp; s.f.s.u.
                &nbsp;&nbsp;|&nbsp;&nbsp;
                patientslikeme&nbsp;&nbsp;|&nbsp;&nbsp; datarobot
              </i>
            </p>
          </div>
        </div>

        <Slider {...sliderSettings}>
          {EXPERIENCE.map((exp) => (
            <div key={exp.title}>
              <div className="work-experience">
                {exp.image}
                <h2 className="resume-title marg1emTopBot">{exp.title}</h2>
                <p>
                  {`${exp.company}, ${exp.location}`}&nbsp;|&nbsp;{exp.dates}
                </p>
                <ul>
                  <li>
                    <strong className="colorRed">
                      Development skills:&nbsp;
                    </strong>
                    <i>{exp.skills}</i>
                  </li>
                  {exp.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Slider>

        <div className="marg2emTop">
          <Gutter className="marg2emTop" />
        </div>
      </div>
    </div>
  );
};
