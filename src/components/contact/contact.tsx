import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface ContactProps {
  page?: string;
}

export const Contact: React.FC<ContactProps> = ({ page }) => {
  return (
    <div className="flex justify-center flex-col w-full text-center section-title mb-[4rem] mt-[4rem]">
      {page === "resume" ? (
        <div className="text-center mt-8 mb-8">
          <h2 className="uppercase text-2xl font-bold">Contact</h2>
        </div>
      ) : (
        <h2 className="text-4xl mb-5">Contact</h2>
      )}
      <p>
        FOR{" "}
        <span className="text-red-600 font-bold uppercase">
          <i>career inquiries</i>
        </span>
      </p>
      <p>
        <strong>Availiable</strong>: Monday to Friday, 9 AM - 5 PM (CST)
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
