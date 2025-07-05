import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Header = () => (
  <>
    <div className="text-center">
      <h1 className="uppercase text-4xl font-bold">jonathan raxa</h1>
    </div>
    <div className="text-center mt-4">
      <div className="text-lg">Austin Metropolitan Area, TX</div>
      <div className="mt-2 flex items-center justify-center gap-10">
        <a
          href="mailto:jonathanraxa@gmail.com"
          className="hover:text-yellow-600 cursor-pointer"
        >
          Email
        </a>
        <span>|</span>
        <a
          href="https://www.linkedin.com/in/jonathanraxa/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-600 cursor-pointer"
        >
          LinkedIn <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <span>|</span>
        <a
          href="https://github.com/jonathanraxa/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-600 cursor-pointer"
        >
          GitHub <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  </>
);
