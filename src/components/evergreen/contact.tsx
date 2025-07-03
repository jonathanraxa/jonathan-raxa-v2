import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  return (
    <div className="flex justify-center flex-col w-full text-center section-title mb-[4rem] mt-[4rem] ">
      <h2 className="text-4xl mb-5">Contact</h2>
      <p>
        FOR{" "}
        <span className="text-red-600 font-bold">
          <i>CAREER INQUIRIES</i>
        </span>
      </p>
      <p>
        <strong>Availiable</strong>: Monday to Sunday, 9am - 7pm
      </p>
      <p>
        <strong>Email:</strong>&nbsp;&nbsp;
        <a
          className="hover:text-yellow-500"
          href="mailto:jonathanraxa@gmail.com"
        >
          jonathanraxa@gmail.com
        </a>
      </p>
      <div className="flex justify-center items-center mt-10 gap-5">
        <Button
          variant="secondary"
          size="icon"
          className="size-10 cursor-pointer hover:text-yellow-500"
        >
          <Link to={routes.github} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon size="10x" icon={faGithub} />
          </Link>
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="size-10 cursor-pointer hover:text-yellow-500"
        >
          <Link to={routes.linkedin} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon size="10x" icon={faLinkedin} />
          </Link>
        </Button>
      </div>
    </div>
  );
};
