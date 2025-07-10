import React from "react";
import family from "@/assets/img/me/family.jpeg";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";

export const AboutMe = () => (
  <div
    id="about-me"
    className="bg-gray-50 dark:bg-gray-200 flex justify-center w-full items-center py-8"
  >
    <div className="p-16 inset-0 w-full h-full object-cover rounded-lg">
      <img className="" src={family} alt="picture of family" />
    </div>

    <div>
      <div className="mt-8 mb-8">
        <h2 className="uppercase text-4xl font-bold">Nice to meet you!</h2>
      </div>
      <div>
        <p>
          My front-end journey began in college after watching the movie "The
          Social Network." I started teaching myself HTML, CSS, and JavaScript,
          and I became hooked, falling in love with all things web development.
          After a few months of teaching myself coding on the side while doing
          general education coursework, I realized what a no-brainer it was to
          pursue a degree in computer science.
        </p>
        <p className="mt-4">
          All of that has led to an accumulation of about 9 years of experience
          in web development and 5 years creating React applications in diverse
          industries such as A.I., digital marketing, higher education, and the
          social networking space.
        </p>
        <p className="mt-4">
          I've also acquired experience with web accessibility, testing tools
          such as Cypress and JEST/RTL (React Testing Library), JavaScript, and
          HTML/CSS. I'm known for delivering scalable, responsive web
          applications and collaborating effectively with cross-functional
          teams.
        </p>
        <p className="mt-4">
          My goal is to create seamless user experiences through thoughtful
          component architecture and maintainable code. My passion for
          engineering has always been to do my part in piecing together the
          puzzles alongside other people. Although cliché to say, I love solving
          problems, finding creative solutions, and taking pride in my work.
        </p>
        <p className="mt-4">
          While my core strength lies in front-end development, I'm actively
          expanding my back-end skill set.
        </p>
        <p className="mt-4">
          <strong>Tech Stack Highlights:</strong>
        </p>
        <p className="mt-4">
          <strong>Front-End:</strong> React, JavaScript (ES6+), HTML5, CSS3,
          Node.js
        </p>
        <p className="mt-4">
          <strong>Testing:</strong> Jest, React Testing Library, Cypress
        </p>

        <div className="mt-4 flex gap-5">
          <Button
            variant="outline"
            className="cursor-pointer hover:text-yellow-500"
            onClick={() => {
              const section = document.getElementById("experience");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Experience
          </Button>
          <Button
            variant="outline"
            className="cursor-pointer hover:text-yellow-500"
          >
            <Link to={routes.resume} target="_blank" rel="noopener noreferrer">
              Resume
            </Link>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="size-10 cursor-pointer hover:text-yellow-500"
          >
            <Link to={routes.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="size-10 cursor-pointer hover:text-yellow-500"
          >
            <Link
              to={routes.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
);
