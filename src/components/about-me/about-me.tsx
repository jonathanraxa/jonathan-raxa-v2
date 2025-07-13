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
    className="bg-gray-50 dark:bg-gray-200 flex flex-col lg:flex-row justify-center w-full items-center py-4 sm:py-8 px-4 sm:px-8"
  >
    <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:pr-8">
      <div className="w-full h-full object-cover rounded-lg overflow-hidden">
        <img
          className="w-full h-auto object-cover"
          src={family}
          alt="picture of family"
        />
      </div>
    </div>

    <div className="w-full lg:w-1/2 lg:pl-8">
      <div className="mb-6 lg:mb-8">
        <h2 className="uppercase text-2xl sm:text-3xl lg:text-4xl font-bold text-center lg:text-left">
          Nice to meet you!
        </h2>
      </div>
      <div className="space-y-4 text-sm sm:text-base">
        <p>
          My front-end journey began in college after watching the movie "The
          Social Network." I started teaching myself HTML, CSS, and JavaScript,
          and I became hooked, falling in love with all things web development.
          After a few months of teaching myself coding on the side while doing
          general education coursework, I realized what a no-brainer it was to
          pursue a degree in computer science.
        </p>
        <p>
          All of that has led to an accumulation of about 9 years of experience
          in web development and 5 years creating React applications in diverse
          industries such as A.I., digital marketing, higher education, and the
          social networking space.
        </p>
        <p>
          I've also acquired experience with web accessibility, testing tools
          such as Cypress and JEST/RTL (React Testing Library), JavaScript, and
          HTML/CSS. I'm known for delivering scalable, responsive web
          applications and collaborating effectively with cross-functional
          teams.
        </p>
        <p>
          My goal is to create seamless user experiences through thoughtful
          component architecture and maintainable code. My passion for
          engineering has always been to do my part in piecing together the
          puzzles alongside other people. Although cliché to say, I love solving
          problems, finding creative solutions, and taking pride in my work.
        </p>
        <p>
          While my core strength lies in front-end development, I'm actively
          expanding my back-end skill set.
        </p>
        <div className="bg-white dark:bg-gray-100 p-4 rounded-lg shadow-sm">
          <p className="font-bold mb-2">Tech Stack Highlights:</p>
          <p className="mb-2">
            <strong>Front-End:</strong> React, JavaScript (ES6+), HTML5, CSS3,
            Node.js
          </p>
          <p className="mb-2">
            <strong>Testing:</strong> Jest, React Testing Library, Cypress
          </p>
          <p className="mb-2">
            <strong>Personal projects:</strong> React, TypeScript, Tailwind CSS,
            Shadcn UI, Material UI, Node.js, Express, MongoDB, Vite, Firebase
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 pt-4">
          <Button
            variant="outline"
            className="cursor-pointer hover:text-yellow-500 transition-colors duration-200"
            onClick={() => {
              const section = document.getElementById("experience");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Experience
          </Button>
          <Button
            variant="outline"
            className="cursor-pointer hover:text-yellow-500 transition-colors duration-200"
          >
            <Link to={routes.resume} target="_blank" rel="noopener noreferrer">
              Resume
            </Link>
          </Button>
          <div className="flex gap-3 sm:gap-5 justify-center sm:justify-start">
            <Button
              variant="secondary"
              size="icon"
              className="size-10 cursor-pointer hover:text-yellow-500 transition-colors duration-200"
            >
              <Link
                to={routes.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="size-10 cursor-pointer hover:text-yellow-500 transition-colors duration-200"
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
  </div>
);
