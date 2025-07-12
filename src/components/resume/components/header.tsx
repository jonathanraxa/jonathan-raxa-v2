import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Header = () => (
  <>
    <div className="text-center">
      <h1 className="uppercase text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
        jonathan raxa
      </h1>
    </div>
    <div className="text-center mt-3 sm:mt-4">
      <div className="text-base sm:text-lg">Austin Metropolitan Area, TX</div>
      <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-10 text-sm sm:text-base">
        <a
          href="mailto:jonathanraxa@gmail.com"
          className="hover:text-yellow-600 cursor-pointer transition-colors duration-200"
        >
          Email
        </a>
        <span className="hidden sm:inline">|</span>
        <a
          href="https://www.linkedin.com/in/jonathanraxa/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-600 cursor-pointer transition-colors duration-200"
        >
          LinkedIn <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <span className="hidden sm:inline">|</span>
        <a
          href="https://github.com/jonathanraxa/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-600 cursor-pointer transition-colors duration-200"
        >
          GitHub <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  </>
);
