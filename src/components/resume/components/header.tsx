import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { routes } from "@/routes/routes";

export const Header = () => (
  <>
    <div className="text-center">
      <h1 className="uppercase text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
        jonathan raxa
      </h1>
    </div>
    <div className="text-center mt-3 sm:mt-4">
      <div className="text-base sm:text-lg">Austin Metropolitan Area, TX</div>
      <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-sm sm:text-base">
        <a
          href="mailto:jonathanraxa@gmail.com"
          className="hover:text-yellow-600 transition-colors duration-200"
        >
          jonathanraxa@gmail.com
        </a>
        <span className="hidden sm:inline">|</span>
        <a
          href={routes.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-600 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faLinkedin} /> linkedin.com/in/jonathanraxa
        </a>
        <span className="hidden sm:inline">|</span>
        <a
          href={routes.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-600 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faGithub} /> github.com/jonathanraxa
        </a>
        <span className="hidden sm:inline">|</span>
        <a
          href="https://jonathanraxa.com"
          className="hover:text-yellow-600 transition-colors duration-200"
        >
          jonathanraxa.com
        </a>
      </div>
    </div>
  </>
);
